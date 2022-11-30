const { bot } = require("../ayarlar.json");

module.exports = async client => {

  var durum = [
    `${bot.prefix}yardım`,
    `${client.user.username} sizin için burada!`,
    `${client.guilds.cache.size} Sunucuya ve ${client.users.cache.size} Üyeye hizmet veriliyor!`
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * durum.length);
    
    client.user.setActivity(durum[random]);
    client.user.setStatus("online");
  }, 1000 * 5);
  
  console.log(`${client.user.username} başlatıldı!`);
};
