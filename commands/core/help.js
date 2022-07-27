const { MessageEmbed } = require('discord.js');

module.exports = {
    name: '3awni',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}3awni',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('Chokran hit katkhdm had bot ~MissPanda');
        embed.addField(`Khdmain - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Nour Berrada', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};