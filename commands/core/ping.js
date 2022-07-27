const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Akher mra t3br lping 9bl ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} Kan **${client.ws.ping}ms** 🛰️`);
    },
};