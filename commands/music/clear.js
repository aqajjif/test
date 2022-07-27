module.exports = {
    name: 'msh',
    aliases: ['clear'],
    utilisation: '{prefix}msh',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`hta mosi9a makhdama daba  ${message.author}... hawl 3awtani ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`makayna hta mosi9a mora hadi ${message.author}... Hawl 3awtani ? ❌`);

        await queue.clear();

        message.channel.send(`Ga3 lmosi9at limora hadi tmesho 🗑️`);
    },
};