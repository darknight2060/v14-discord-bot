const { EmbedBuilder } = require('discord.js');
const { bot } = require('../ayarlar.json');

exports.run = (client, message) => {
  const user = message.mentions.users.first() || message.author;

  message.channel.sendTyping();
  
  const embed = new EmbedBuilder()
    .setTitle(user.tag)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
    .setColor(bot.embedColor)
  
  message.channel.send({ embeds: [embed] });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["a"],
  permLevel: 0
};

exports.help = {
  name: "avatar",
  description: "Avatarınızı gösterir.",
  usage: "avatar / avatar <@kullanıcı>",
  category: "eğlence"
};
