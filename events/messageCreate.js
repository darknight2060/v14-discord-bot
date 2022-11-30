const { bot } = require('../ayarlar.json');

module.exports = message => {
  
  const client = message.client;
  
  if (message.author.bot) return;
  if (!message.content.startsWith(bot.prefix)) return;
  
  let command = message.content.split(' ')[0].slice(bot.prefix.length).toLowerCase();
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
  if (client.prefixCommands.has(command)) {
    cmd = client.prefixCommands.get(command);
  } else if (client.prefixAliases.has(command)) {
    cmd = client.prefixCommands.get(client.prefixAliases.get(command));
  }
  
  if (cmd) {
    if (!cmd.conf.enabled) return message.reply("Bu komut devre dışı bırakıldı.");
    
    if (message.channel.type == "dm" && cmd.conf.guildOnly === true)
      return message.channel.send(`Bu komudu DM'de kullanamazsın.`);
    
    if (perms < cmd.conf.permLevel) return;
    
    try {
      cmd.run(client, message, params, perms);
    } catch (error) {
  		console.error(`${cmd.help.name} komudunu çalıştırırken bir hata oluştu.`);
  		console.error(error);

      message.reply("Komudu çalıştırırken bir hata oluştu.");
    }
  }
  
};
