const { CommandInteraction, MessageEmbed } = require("discord.js");


module.exports = {
	name: "mod",
	description: "welcome to user a ticket.",
	type: 'CHAT_INPUT',
	options: [
		{
     name: 'nick',
     description: 'Nick del usuario de minecraft',
     type: 'STRING',
     required: true
    },
    {
     name: 'razon',
     description: 'Razon del problema',
     type: 'STRING',
     required: true
    },
	],
	/**
	 *
	 * @param {import("../..").Bot} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
   */
	run: async (client, interaction, args) => {
    interaction.reply({ content: `**Nick:** ${interaction.options.getString("nick")}\n**Razon:** ${interaction.options.getString("razon")}\n**Tag:** <@&1060664544663441478>`})
	},
};
    