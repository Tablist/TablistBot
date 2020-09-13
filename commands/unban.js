const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let reason = args.slice(1).join(" ");
    let user = args[0];
    let logs = client.channels.find('name', 'logs');
    if (!logs) return message.reply("I cannot find a logs channel.");
    if (reason.length < 1) return message.reply("You must supply a reason to unban said user.");
    if (message.mentions.users.size < 1) return message.reply("You must supply a User Resolvable (Google it noob), such as a user ID.").catch(console.error);
    message.guild.unban(user);


const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField("Action:", "unban")
    .addField("User:", `${user.username}#${user.discriminator}`)
    .addField("Moderator:", `${message.author.username}#${message.author.discriminator}`);
return client.channels.get(logs.id).sendEmbed(embed);
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases:[],
    permLevel: 1
};

exports.help = {
    name: 'unban',
    description: 'Unbans the mentioned user.',
    usage: 'unban [mention] [reason]'
};