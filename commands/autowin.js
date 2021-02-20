module.exports = {
    name:"autowin",
    description:"pain and suffering",
    guildOnly: true,
    execute(message, args){
        if (!args.length) {
            return message.channel.send('You need to enter the game pin (k!autowin 381928) and a name.');
            } else {
            var varPin = `${args[0]}`
            var varName = `${args[1]}`
            console.log('Autowin was run by user ' + message.member.id  + ' \(targeting game: ' + `${args[0]}` + '\)')
            message.channel.send('Starting AutoAnswer in game ' + `${args[0]} ` + 'with name ' + `${args[1]}` + '.')
        }
    }
}