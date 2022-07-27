module.exports = async (client) => {
    console.log(`Tlogginit b  ${client.user.username}\n-> Msta3d  1${client.guilds.cache.size} servers  ${client.users.cache.size}4 users`);

    client.user.setActivity(client.config.app.playing);
};