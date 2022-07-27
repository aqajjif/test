module.exports = {
    name: 'zid',
    aliases: ['skip'],
    utilisation: '{prefix}zid',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`hta mosi9a makhdama daba ${message.author}... hawl 3awtani ? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `lmosi9a likhdama daba ${queue.current.title} zdtha ✅` : `kayn chi khata2 ${message.author}... hawl 3awtani ? ❌`);
    },
};