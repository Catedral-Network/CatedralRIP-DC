const { discord, CommandInteraction, MessageEmbed } = require("discord.js");


module.exports = {
	name: "transfer",
	description: "Transfer to user a ticket.",
	type: 'CHAT_INPUT',
	options: [
		{
			name: "user",
			description: "The user to add to saying transfer",
			type: "USER",
			required: true
		},
		{
			name: "staff",
			description: "The staff to need",
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
	run: async (client, interaction, args, message) => {
		
		const embed = new client.discord.MessageEmbed()
            .setTitle("Ticket Transferido")
            .setDescription(`Usuario: ${interaction.options.getUser('user')} \n Staff: ${interaction.options.getUser('staff')} \n\n Sea paciente mientra el staff le responda`)
            .setColor("PURPLE")
			
		const user = interaction.options.getUser('user');
		const msg = await interaction.channel.send(`${interaction.options.getUser('user')} ${interaction.options.getUser('staff')}`)
		msg.delete();
    interaction.reply({embeds: [embed]})
	},
};