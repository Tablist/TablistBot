const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);


}

module.exports.help = {
    name: 'say',
    description: 'Makes the bot say whatever you want it to say. You can also use this to mention users..',
    usage: 'say <message>'
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
  };
  