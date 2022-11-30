const { EmbedBuilder } = require('discord.js');
const { bot } = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!args[0]) {
    const embed = new EmbedBuilder()
      .setColor(bot.embedColor)
      .setTitle(client.user.username)
      .setDescription(`
        **${bot.prefix}yardım genel** Genel komutları gösterir
        **${bot.prefix}yardım eğlence** Eğlence komutlarını gösterir
      `)
    
    return message.channel.send({ embeds: [embed] });
  }
  
  var kategoriler = ["eğlence", "genel", "admin"];
  var kategori = args[0];
  var komutlar = client.prefixCommands;
  var text = "";
  
  if (!kategoriler.includes(kategori.toLowerCase()))
    return message.reply(`Geçersiz bir kategori adı girdin.`);
  
  message.channel.sendTyping();
  
  komutlar.forEach(c => {
    if (c.help.category !== kategori) return;
    if (c.conf.enabled)
      text = text + `**${bot.prefix}${c.help.name}** ${c.help.description}\n`;
  })
  
  const embed = new EmbedBuilder()
    .setColor(bot.embedColor)
    .setTitle(client.user.username)
    .setDescription(text || "Komut bulunamadı.")
  
  return message.channel.send({ embeds: [embed] });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["komutlar"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım menüsünü gösterir.",
  usage: "yardım <eğlence/genel>",
  category: "genel"
};
