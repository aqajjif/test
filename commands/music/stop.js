module.exports = {
    name: 'khrj',
    aliases: ['dc'],
    utilisation: '{prefix}khrj',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`hta mosi9a makhdama ${message.author}... hawl 3awtani ? ❌`);

        queue.destroy();

        message.channel.send(`Mosi9a w9fat,bslama ✅`);
    },
};