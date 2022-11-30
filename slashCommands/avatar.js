const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { bot } = require('../ayarlar.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Avatarınızı gösterir.')
    .addUserOption(option => option
      .setName('kullanıcı')
      .setDescription('Avatarı görüntülenecek kişi.')),
  async execute(interaction) {
    const user = interaction.options.getUser('kullanıcı') || interaction.user;

    await interaction.deferReply();
    
    const embed = new EmbedBuilder()
      .setTitle(`${user.username}#${user.discriminator}`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .setColor(bot.embedColor)

    return interaction.editReply({ embeds: [embed] });
  }
};