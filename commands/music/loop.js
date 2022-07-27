const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'matw9fch',
    aliases: ['loop', 'repeat'],
    utilisation: '{prefix}matw9fch <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`hta mosi9a makhdama daba ${message.author}... hawl 3awtani ? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`khask thyd loop l music likhdama daba (${client.config.app.px}loop) ${message.author}... hawl 3awtani ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `matw9fch **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** ga3 lmusic limora hadi rayb9aw yt3awdo 🔁` : `chi haja khata2 ${message.author}... hawl 3awtani ? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`You must first disable the current queue in the loop mode (${client.config.app.px}loop queue) ${message.author}... hawl 3awtani ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `matw9fch  mode **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}**had lmusic likhdama ratb9a t3awd  🔂` : `kayn chi khata2 ${message.author}... hawl 3awtani ? ❌`);
        };
    },
};