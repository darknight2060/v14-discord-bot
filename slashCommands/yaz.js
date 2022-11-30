const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yaz')
		.setDescription('Bota yazı yazdırır.')
    .addStringOption(option => option
      .setName('yazı')
      .setDescription('Yazdırılacak yazı.')
      .setRequired(true)),
	async execute(interaction) {
    const yazı = interaction.options.getString('yazı');

    interaction.channel.send(yazı);
    
		await interaction.reply({ content: 'Gönderildi.', ephemeral: true });
	}
};