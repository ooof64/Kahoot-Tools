module.exports = {
    name: 'kspam',
    description: "kspam!",
    guildOnly: true,
    execute(message, args){
        const KahootSpam = require('kahoot-spam')
        let api = KahootSpam
        api.spamWithAnswers(123456, "Name", 10, false)
    }
}
