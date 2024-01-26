const { Client, GatewayIntentBits, PermissionsBitField, Collection } = require('discord.js');
const client = new Client({ intents: [
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.DirectMessageTyping,
]});

const { bot, website } = require("./ayarlar.json");
const fs = require("fs");
const express = require('express');
const app = express();

app.listen();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('../website/anasayfa', {
    website: website,
    location: "anasayfa"
  });
});

app.get('/komutlar', function(req, res) {
  res.render('../website/komutlar', {
    website: website,
    commands: client.prefixCommands,
    location: "komutlar"
  });
});


const { REST, Routes } = require('discord.js');
const rest = new REST({ version: '10' }).setToken(bot.token);

client.prefixCommands = new Collection();
client.prefixAliases = new Collection();
client.slashCommands = new Collection();


const prefixCommandFiles = fs.readdirSync('./prefixCommands').filter(file => file.endsWith('.js'));
const slashCommandFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith('.js'));

for (const file of prefixCommandFiles) {
  const prefixCommand = require(`./prefixCommands/${file}`);
  
  client.prefixCommands.set(prefixCommand.help.name, prefixCommand);
    
  prefixCommand.conf.aliases.forEach(alias => {
    client.prefixAliases.set(alias, prefixCommand.help.name);
  });
}

for (const file of slashCommandFiles) {
  const slashCommand = require(`./slashCommands/${file}`);
  client.slashCommands.set(slashCommand.data.name, slashCommand);
}

(async () => {
  const slashCommands = [];
  
	try {
    for (const file of slashCommandFiles) {
    	const slashCommand = require(`./slashCommands/${file}`);
    	slashCommands.push(slashCommand.data.toJSON());
    }
    
    await rest.put(
      Routes.applicationCommands(bot.botID),
      { body: slashCommands }
    );
  } catch (error) {
    console.error(error);
  }
})();

client.elevation = message => {
  if (!message.guild) return;
  
  let permlvl = 0;

  if (message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) permlvl = 1;
  if (message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) permlvl = 2;
  if (message.member.id === bot.sahipID) permlvl = 3;

  return permlvl;
};

client.on('ready', () => require(`./events/ready`)(client));
client.on('messageCreate', require(`./events/messageCreate`));
client.on('interactionCreate', require(`./events/interactionCreate`));

client.login(bot.token);
