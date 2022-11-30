const { EmbedBuilder } = require('discord.js');
const { bot } = require('../ayarlar.json');

exports.run = (client, message, args) => {
  const embed = new EmbedBuilder()
    .setColor(bot.embedColor)
    .setDescription('FBI OPEN THE DOOR!')
    .setImage(`https://media1.tenor.com/images/93d11bc59526ce49f60766f0045d819b/tenor.gif?itemid=11500735`)

  return message.channel.send({ embeds: [embed] });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fbi',
  description: 'FBI OPEN THE DOOR!',
  usage: 'fbi',
  category: "eğlence"
};