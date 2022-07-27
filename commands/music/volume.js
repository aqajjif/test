const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'sot',
    aliases: ['vol'],
    utilisation: `{prefix}sot [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`hta mosi9a makhdama ${message.author}... hawl 3awtani ? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`sot dyal daba ${queue.volume} 🔊\n*ila briti tbdlo kteb mabin **1** and **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`sot libriti tbdl howa likayn daba ${message.author}... hawl 3awtani ? ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`ra9m liglti makaynch. kteb mabin  **1** and **${maxVol}** ${message.author}... hawl 3awtani ? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `sot tbdl l  **${vol}**/**${maxVol}**% 🔊` : `kayn chi khata2 ${message.author}... Hawl 3awtani ? ❌`);
    },
};