const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { bot } = require('../ayarlar.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fbi')
    .setDescription('FBI OPEN THE DOOR!'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(bot.embedColor)
      .setDescription('FBI OPEN THE DOOR!')
      .setImage(`https://media1.tenor.com/images/93d11bc59526ce49f60766f0045d819b/tenor.gif?itemid=11500735`)  

    return interaction.reply({ embeds: [embed] });
  }
};