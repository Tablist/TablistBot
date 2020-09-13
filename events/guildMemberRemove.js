module.exports = member => {
    const guild = member.guild;
    guild.defaultChannel.send(`${member.user.username} has left. You will be remembered. :sob: `);
  };