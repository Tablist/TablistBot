const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Doublecheck if you're mentioning someone!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("no | User has MANAGE_MESSAGES permissions!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("no | User has MANAGE_MESSAGES permissions!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("Can't find log channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 2
 };
 
 module.exports.help = {
  name: 'kick',
  description: 'Kick the mentioned user.',
  usage: 'kick [mention] [reason]'
 };