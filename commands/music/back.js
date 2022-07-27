module.exports = {
    name: 'rj3',
    aliases: ['back'],
    utilisation: '{prefix}rj3',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Hta mosi9a makhdama daba ${message.author}... Hawl 3awtani ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`hta mosi9a makhdmtiha 9bl hadi ${message.author}... Hawl 3awtani ? ❌`);

        await queue.back();

        message.channel.send(`Rankhdm **Lmosi9a li9bl**  ✅`);
    },
};