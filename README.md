# v14 Discord BOT

## Giriş

Discord.js v14 ile yazdığım, basit bir responsive website de dahil edilmiş güzel olmasını umduğum bot kodları. İki genel, iki eğlence ve bir de admin komudu olmak üzere 5 komut mevcut. Bir sorun/önerin olursa [Issues](https://github.com/akerem17/v14-discord-bot/issues) bölümünden konu açabilirsin.

### Özellikler

- Güncel Discord.js v14 ✅
- Prefix + Slash Komutları ✅
- Dinamik Responsive Website ✅

## Kurulum

### Gereksinimler

- [Node.js v16.9.0+](https://nodejs.org/tr/)

### Kurulum Aşaması
1. Bu projeyi indir ve ZIP dosyasını ayıkla.
2. **CMD** veya **PowerShell**'i ayıkladığın proje klasörüne aç.
3. `npm i` yazarak gerekli modülleri yükle.
4. Bot oluşturmak için [Discord Geliştirici Portalına](https://discord.com/developers/applications) git.
5. `New Application` butonuna tıkla, ve açılan menüde bir isim gir. Ardından `Create` butonuna tıkla.
6. Bu sayfada `APPLICATON ID`'yi kopyalayarak `ayarlar.json`'daki `botID` kısmına yapıştırmalısın. (**Slash Komutları** için gereklidir.)
   - Yine aynı sayfada aşağıya kaydır ve `MESSAGE CONTENT INTENT`'ini aktif et. (**Prefix Komutları** için gereklidir.)
7. Sol taraftaki menüden `Bot` sayfasına git, sağ taraftaki `Add Bot` butonuna tıkla ve onayla.
8. `TOKEN` altındaki `Reset Token` butonuna tıkla ve bu tokeni kopyaladıktan sonra `ayarlar.json`'daki `token` kısmına yapıştır.
9. `node main.js` yazarak botu başlat.

Eğer her şey yolunda giderse bot çalışacaktır.

## Ayarlar

### BOT Ayarları

```json
"bot": {
  "token": "TOKEN",
  "prefix": "PREFIX",
  "botID": "ID",
  "sahipID": "ID",
  "embedColor": "#Renk"
}
```

- `token` Botun tokeninin yazılacağı yerdir.
- `prefix` Prefix Komutlarının başında yazılan **"!"** veya **"+"** gibi ön eklerdir. (örn. **!avatar**)
- `botID` Botun ID'sinin yazılacağı yerdir, Slash Komutları için gereklidir.
- `sahipID` Bot sahibinin ID'sinin yazılacağı yerdir, yetkilendirme için kullanılır.
- `embedColor` Embed içeren komutlarda Embed'in solunda yer alan rengi belirler.

### WebSite Ayarları

```json
"website": {
  "name": "Bot Adı",
  "description": "Bot hakkında açıklama.",
  "iconURL": "Botun Görseli",
  "inviteLink": "Bot Davet Linki",
  "serverLink": "Destek Sunucu Davet Linki",
  "colors": {
    "primary": "#Renk",
    "second": "#Renk",
    "third": "#Renk"
  }
}
```

- `name` Botun Website'de görünen adını belirler.
- `description` Websitenin Ana Sayfasında botun açıklamasını belirler.
- `iconURL` Website'de botun gösterilecek ikonunu belirler.
- `inviteLink` Websitenin Ana Sayfasında botun sunucuya davet edileceği linki belirler. Link oluşturmak için [Discord Geliştirici Portalındaki OAuth2](https://discord.com/developers/applications/689177293590888520/oauth2/general) sayfasına göz at.
- `serverLink` Botun destek sunucusuna ait davet linkini belirler.
- `colors` Websitedeki renkleri belirler. `primary` ve `second` websitenin bir çok yerinde kullanılırken, `third` daha nadir kullanılır.

### Komut Ayarları (Prefix)

```js
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
```

- `enabled` Komudu açıp kapatabilir. Kapalı komutlar WebSitede ve Yardım komutunda görünmez.
- `guildOnly` Sadece sunucularda çalışması için ayarlar. Açık olduğunda DM'de çalışmaz.
- `aliases` Alternatif komut adı/adları, `["a", "a2", "a3"]` şeklinde çalışır.
- `permLevel` Komudun gerektirdiği yetki. Yetkiler için `main.js:84` dosyasına bakabilirsin.

```js
exports.help = {
  name: "avatar",
  desc: "Avatarınızı gösterir.",
  usage: "avatar / avatar <@kullanıcı>",
  category: "eğlence"
};
```

- `name` Komudun kullanım adı.
- `desc` Komudun açıklaması, yardım komudunda görünür.
- `usage` Komudun kullanımı, website'de görünür.
- `category` Komudun kategorisi, yardım komudunda ve website'de görünür. Doğru belirtilmezse yardım komutunda görünmeyebilir.

## Destek
- Eğer destek olmak istersen bir ⭐ yeterli. 🥰