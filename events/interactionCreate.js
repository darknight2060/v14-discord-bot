module.exports = async interaction => {
  
  if (interaction.isChatInputCommand()) {
  	const command = interaction.client.slashCommands.get(interaction.commandName);
  
    if (!command)
  		return console.error(`${interaction.commandName} adında bir komut bulunamadı.`);
  
  	try {
  		await command.execute(interaction);
  	} catch (error) {
  		console.error(`${interaction.commandName} komudunu çalıştırırken bir hata oluştu.`);
  		console.error(error);

      interaction.reply("Komudu çalıştırırken bir hata oluştu.");
  	}
  }
  
};