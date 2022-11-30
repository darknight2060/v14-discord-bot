const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong! diye cevaplar.'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	}
};