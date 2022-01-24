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

client.on("ready", () =>{
    console.log(`kahootraid bot is online!`);
    client.user.setActivity('k!help', { type: 'WATCHING' });
 });

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'raid'){
        client.commands.get('raid').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'invite'){
	    client.commands.get('invite').execute(message, args); 
    }
});

//Add to server link: https://tinyurl.com/y4ah2h6o
client.login('TOKEN	');
