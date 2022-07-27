module.exports = {
    name: 'w9f',
    aliases: ['pause'],
    utilisation: '{prefix}w9f',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`hta mosi9a makhdama daba ${message.author}... hawl 3awtani ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `lmosi9a ${queue.current.title} w9fat ✅` : `kayn chi khata2 ${message.author}... hawl 3awtani ? ❌`);
    },
};