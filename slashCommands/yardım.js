const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { bot } = require('../ayarlar.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('yardım')
    .setDescription('Yardım menüsünü gösterir.')
  	.addStringOption(option => option
      .setName('kategori')
			.setDescription('Yardım kategorisi.')
			.setRequired(true)
			.addChoices(
				{ name: 'Eğlence', value: 'eğlence' },
				{ name: 'Genel', value: 'genel' }
			)),
  async execute(interaction) {
    var kategoriler = ["eğlence", "genel", "admin"];
    var kategori = interaction.options.getString('kategori');
    var komutlar = interaction.client.prefixCommands;
    var text = "";
    
    await interaction.deferReply();
    
    komutlar.forEach(c => {
      if (c.help.category !== kategori) return;
      if (c.conf.enabled)
        text = text + `**${bot.prefix}${c.help.name}** ${c.help.description}\n`;
    })
    
    const embed = new EmbedBuilder()
      .setColor(bot.embedColor)
      .setTitle(interaction.client.user.username)
      .setDescription(text || "Komut bulunamadı.")
    
    return interaction.editReply({ embeds: [embed] });
  }
};