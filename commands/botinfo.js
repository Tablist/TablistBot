const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("TablistAPIBOT Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);


    message.channel.send(botembed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot'],
  permLevel: 0
};

exports.help = {
  name:"botinfo",
  description: 'Displays the bots information.',
  usage: 'botinfo'
}