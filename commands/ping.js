exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Ping?");
  msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: "0"
};

exports.help = {
  name: "ping",
  category: "Miscellaneous",
  description: "Displays the latency.",
  usage: "ping"
};