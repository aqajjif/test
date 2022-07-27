module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'SaveMosi9a': {
            if (!queue || !queue.playing) return int.reply({ content: `hta music makhdama... hawl 3awtani ? ❌`, ephemeral: true, components: [] });

            int.member.send(`rah saveti lmosi9a ${queue.current.title} | ${queue.current.author} men server ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `rah siftlik l3onwan dyalha f privée ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `man9drch nsiftlik message fprivée... hawl 3awtani ? ❌`, ephemeral: true, components: [] });
            });
        }
    }
};