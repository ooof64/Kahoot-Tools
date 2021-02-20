const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: "Help command.",
    guildOnly: true,
    execute(message, args){
    const embed = new MessageEmbed()

    .setTitle("KahootRaider Bot Help Menu")
    .setDescription("All the commands use the k! prefix.")
    .addFields(
		{ name: 'k!help', value: 'Displays this message.'},
		{ name: 'k!raid', value: 'Raids a kahoot, e.g. k!raid 384893 would raid the kahoot with the game pin 384893.'},
    { name: 'k!invite', value: 'Sends the invite link to invite me to your server.'},
    { name: 'k!autowin', value: 'Automatically wins a Kahoot game for you. [BETA STATUS - UNFUNCTIONAL]'}
	)
 	message.channel.send(embed)
    }
}
