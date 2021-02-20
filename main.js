const Discord = require('discord.js');
const Guild = require("discord.js")

const client = new Discord.Client();

const prefix = 'k!'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('THE IMPSOTER IS SUS!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'raid'){
        client.commands.get('kspam').execute(message, args);
    } else if (command == 'sus'){
        client.commands.get('sus').execute(message, args);
    }
	
});

//Add to server link: https://tinyurl.com/y4ah2h6o
client.login('ODEyMzY3NDcxMTU0OTU0MzIx.YC_uKg.RP2SmYfQtZFwNBrTp3GUh64_cQc');
