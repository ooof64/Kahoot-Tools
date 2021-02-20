module.exports = {
    name: 'raid',
    description: "raid!",
    guildOnly: true,
    execute(message, args){
        if (!args.length) {
          return message.channel.send('you need to enter the game pin e.g. k!raid 381928');
    	} else {
    	  var varPin = `${args}`
	  message.channel.send(Sending raid bots to `${args}`)
          const KahootSpam = require('kahoot-spam')
          let api = KahootSpam
          api.spam(varPin, "amogusdrip", 256)
	}
    }
}
