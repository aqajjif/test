const { QueryType } = require('discord-player');

module.exports = {
    name: 'khdm',
    aliases: ['play'],
    utilisation: '{prefix}khdm [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`kteb mosi9a kayna machi tkhrbi9 ${message.author}... hawl 3awtani ? ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`mal9itch had mosi9a ${message.author}... hawl 3awtani ? ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`man9drch ndkhl l room ${message.author}... hawl 3awtani ? ❌`);
        }

        await message.channel.send(`tssna chwya ${res.playlist ? 'playlist' : 'mosi9a'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};