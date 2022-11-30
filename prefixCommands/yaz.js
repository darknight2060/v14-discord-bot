const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  
  if (mesaj.length < 1) return message.reply("Bir şey yazmalısın.");
  
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "yaz",
  description: "Bota yazı yazdırır.",
  usage: "yaz <yazı>",
  category: "admin"
};
