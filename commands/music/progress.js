module.exports = {
    name: 'finwslt',
    aliases: ['pbar'],
    utilisation: '{prefix}finwslt',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`hta mosi9a makhdama ${message.author}... hawl 3awtani ? ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`khdam live, makayn manwrik 🎧`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};