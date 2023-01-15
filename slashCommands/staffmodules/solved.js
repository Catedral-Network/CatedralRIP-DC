const { CommandInteraction, MessageEmbed } = require("discord.js");


module.exports = {
	name: "solved",
	description: "Ticket resuelto",
	type: 'CHAT_INPUT',
	options: [
		{
			name: "user",
			description: "ticket resolvido",
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
    interaction.reply({ content: `${interaction.options.getUser('user')} Recuerda que el equipo de soporte de Catedral, siempre estará disponible para usted, que tenga un buen día, procedo a cerrar el ticket.`})
	},
};
    