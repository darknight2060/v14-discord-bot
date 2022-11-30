const Discord = require('discord.js');

exports.run = (client, message) => {
  message.reply("Pong!");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "Pong! diye cevaplar.",
  usage: "ping",
  category: "genel"
};
