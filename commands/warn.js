const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("no lol");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find that user.");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("nah they're cool skiddo");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warn")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Couldn't find a logs channel.");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.reply("**[SYSTEM]** You should create a role called \"Muted\" tbh");

    let mutetime = "30m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`**[SYSTEM]** <@${wUser.id}> has been temporarily muted!`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`**[SYSTEM]** <@${wUser.id}> has been unmuted.`)
    }, ms(mutetime))
    if(warns[wUser.id].warns == 3){
      message.guild.member(wUser).ban(reason);
      message.channel.send(`${wUser.tag} has been banned.`)
  }
  }
}

module.exports.help = {
  name: "warn"
}
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};  

exports.help = {
    name: 'warn',
    description: 'Issues a warning to said user.',
    usage: 'warn [mention] [reason]'
  };