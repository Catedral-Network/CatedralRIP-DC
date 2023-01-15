const { CommandInteraction, MessageEmbed } = require("discord.js");


module.exports = {
	name: "afk",
	description: "user afk on ticket",
	type: 'CHAT_INPUT',
	options: [
		{
			name: "user",
			description: "The user to add to saying afk",
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
    interaction.reply({ content: `En vista de que ${interaction.options.getUser('user')} se quedo inactivo, procederé a cerrar el ticket, recuerde que el soporte de Catedral Network podrá atenderle en cualquier momento cuando usted desee.?`})
	},
};
    