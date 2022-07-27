module.exports = {
    name: 'kml',
    aliases: ['rs'],
    utilisation: '{prefix}kml',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`hta music makhdama daba ${message.author}... hawl 3awtani ? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `lmosi9a ${queue.current.title} ratkml ✅` : `kayn chi khata2 ${message.author}... hawl 3awtani ? ❌`);
    },
};