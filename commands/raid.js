module.exports = {
    name: 'raid',
    description: "raid!",
    guildOnly: true,
    execute(message, args){
        if (!args.length) {
          return message.channel.send('you need to enter the game pin e.g. k!raid 381928');
      	} else {
    	    var varPin = `${args}`
          console.log('Raid started by user ' + message.member.id)
	        message.channel.send('Sending raid bots to ' + `${args}`)
          const KahootSpam = require('kahoot-spam')
          let api = KahootSpam
          api.spam(varPin, "RAIDED", 256)
        }
    }
}
