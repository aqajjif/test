player.on('error', (queue, error) => {
    console.log(`kayn mochkil f intidar ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Kayna mochkil f connexion ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Hana rannkhdmlik ${track.title} f **${queue.connection.channel.name}** π§`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Mosi9a  ${track.title} tzadt  f intidar β`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('ana khrjt bohdi hit t9lt9,  ranmseh lmosi9at lif intidar... β');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('khlitoni bohdi f room , ranmchi bhaliπ... β');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('safe kml lmosi9a ila britini nb9a omankhrjch kteb $matw9fch β');
});