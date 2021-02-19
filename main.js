const Discord = require('discord.js');
const Guild = require("discord.js")

const client = new Discord.Client();

const prefix = '~'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('AlphaBot is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'yt'){
        client.commands.get('yt').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'blacklist'){
        client.commands.get('blacklist').execute(message, args);
    } else if  (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'moderator') {
        client.commands.get('moderator').execute(message, args);
    } else if (command === 'developer') {
        client.commands.get('developer').execute(message, args);
    }
	
});

//Add to server link: https://tinyurl.com/y4ah2h6o
client.login('TOKEN');
