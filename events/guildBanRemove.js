const Discord = require('discord.js');

module.exports = (guild, user) => {

  guild.defaultChannel.send(`${user.tag} has been unbanned. Better be a good boy lol.`);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Unban\n**Target:** ${user.tag}\n**Moderator:** ${guild.client.unbanAuth.tag}\n**Reason:** ${guild.client.unbanReason}`);
  return guild.channels.get(guild.channels.find('name', 'mod-log').id).send({embed});

};