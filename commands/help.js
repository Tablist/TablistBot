const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor("#F03434")
  .addField("Comands ADD");

  message.channel.send(helpembed);

  if(message.member.hasPermission("MANAGE_MESSAGES")){
  let modembed = new Discord.RichEmbed()
  .setDescription("")
  .setColor("#F03434")
  .addField("")

   try{
     await message.author.send(modembed)
     message.react("")
   }catch(e){
     message.reply("");
     message.react("")
   }
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "0"
};

exports.help = {
  name: "help",
  //category: "Miscellaneous",
  description: "Displays all available commands for your permission level.",
  usage: "help"
};