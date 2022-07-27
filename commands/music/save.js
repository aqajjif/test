module.exports = {
    name: 'hfed',
    aliases: ['sv'],
    utilisation: '{prefix}hfed',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`hta music makhdama ${message.author}... hawl 3awtani ? ❌`);

        message.author.send(`rak saveti ${queue.current.title} | ${queue.current.author} men server ${message.guild.name} ✅`).then(() => {
            message.channel.send(`siftlik title dmusic f fprivée ✅`);
        }).catch(error => {
            message.channel.send(`man9drch nsiftlik message fprivée${message.author}... hawl 3awtani ? ❌`);
        });
    },
};