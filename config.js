module.exports = {
    app: {
        px: '$',
        token: 'MTAwMDQxMDIwMzkxODk2NjgwNA.GYFrFC.EmJg49X-yxERulwkUe_eqhA122CRQoBw2SYHEI',
        playing: 'www.misspandabot.ml'
    },

    opt: {
        DJ: {                   // Custom DJ role
            enabled: false, 
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,            // The maximum Volume to select (Default = 100)
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
