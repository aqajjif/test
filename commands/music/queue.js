const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'intidar',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`hta music makhdama daba ${message.author}... hawl 3awtani ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`makayna hta music mora hadi ${message.author}... hawl 3awtani ? ❌`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`server intidar - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (tlbha  : ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `w  **${songs - 5}** lmosi9at lokhrin...` : `fl playlist **${songs}** mosi9a...`;

        embed.setDescription(`Halya ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('kekw', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};