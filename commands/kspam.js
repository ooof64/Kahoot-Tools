module.exports = {
    name: 'kspam',
    description: "kspam!",
    guildOnly: true,
    execute(message, args){
        if (!args.length) {
          return message.channel.send('enter a game pin dummy');
    	} else {
    	  var varPin = ${args}
          const KahootSpam = require('kahoot-spam')
          let api = KahootSpam
          api.spam(varPin, "amogusdrip", 256)
	}
    }
}
