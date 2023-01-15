const { CommandInteraction, MessageEmbed } = require("discord.js");


module.exports = {
	name: "welcome",
	description: "welcome to user a ticket.",
	type: 'CHAT_INPUT',
	options: [
		{
			name: "user",
			description: "The user to add to saying welcome",
			type: "USER",
			required: true
		}	
	],
	/**
	 *
	 * @param {import("../..").Bot} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
   */
	run: async (client, interaction, args) => {
		const user = interaction.options.getUser('user');
    interaction.reply({ content: `Hola ${interaction.options.getUser('user')}, bienvenido al soporte de Catedral Network, en que podemos ayudarle?`})
	},
};
    