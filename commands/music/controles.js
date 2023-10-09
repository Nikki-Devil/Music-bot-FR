const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    name: 'controles',
    description: "défini un channel de contrôle ",
    voiceChannel: false,
    permissions: PermissionsBitField.Flags.ManageMessages,
    options: [
        {
            name: 'channel',
            description: 'le channel dans lequel les contrôles seront envoyés',
            type: ApplicationCommandOptionType.Channel,
            required: true,
        }
    ],
    async execute({ inter, client }) { 
      let Channel = inter.options.getChannel('channel');
      if (Channel.type !== 0) return inter.editReply({ content: `Vous devez l'envoyer dans un channel textuel... ❌`, ephemeral: true})

    
      const embed = new EmbedBuilder()
       .setTitle('Controllez vos musiques avec les réactions')
       .setImage(inter.guild.iconURL({ size: 4096, dynamic: true }))
       .setColor('#2f3136')
       .setFooter({ text: 'Par Zerio ❤️ - Traduit par Nikki φ', iconURL: inter.member.avatarURL({ dynamic: true })})


         inter.editReply({ content: `Contrôles envoyés dans le channel ${Channel}... ✅`, ephemeral: true})

         const back = new ButtonBuilder()
         .setLabel('Retour')
         .setCustomId(JSON.stringify({ffb: 'back'}))
         .setStyle('Primary')

         const skip = new ButtonBuilder()
         .setLabel('Sauter')
         .setCustomId(JSON.stringify({ffb: 'skip'}))
         .setStyle('Primary')

         const resumepause = new ButtonBuilder()
         .setLabel('Pause / Play')
         .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
         .setStyle('Danger')

         const save = new ButtonBuilder()
         .setLabel('Sauvegarder')
         .setCustomId(JSON.stringify({ffb: 'savetrack'}))
         .setStyle('Success')

         const volumeup = new ButtonBuilder()
         .setLabel('Volume +')
         .setCustomId(JSON.stringify({ffb: 'volumeup'}))
         .setStyle('Primary')

         const volumedown = new ButtonBuilder()
         .setLabel('Volume -')
         .setCustomId(JSON.stringify({ffb: 'volumedown'}))
         .setStyle('Primary')

         const loop = new ButtonBuilder()
         .setLabel('Boucle')
         .setCustomId(JSON.stringify({ffb: 'loop'}))
         .setStyle('Danger')

         const np = new ButtonBuilder()
         .setLabel('Musique actuelle')
         .setCustomId(JSON.stringify({ffb: 'nowplaying'}))
         .setStyle('Secondary')
         
         const queuebutton = new ButtonBuilder()
         .setLabel('Liste')
         .setCustomId(JSON.stringify({ffb: 'queue'}))
         .setStyle('Secondary')

        const lyrics = new ButtonBuilder()
            .setLabel('Text')
            .setCustomId(JSON.stringify({ffb: 'lyrics'}))
            .setStyle('Primary')

        const shuffle = new ButtonBuilder()
            .setLabel('Mélanger')
            .setCustomId(JSON.stringify({ffb: 'shuffle'}))
            .setStyle('Success')

        const stop = new ButtonBuilder()
            .setLabel('Stop')
            .setCustomId(JSON.stringify({ffb: 'stop'}))
            .setStyle('Danger')


         const row1 = new ActionRowBuilder().addComponents(back, queuebutton, resumepause, np, skip)
         const row2 = new ActionRowBuilder().addComponents(volumedown, loop, save, volumeup)
        const row3 = new ActionRowBuilder().addComponents(lyrics, shuffle, stop)


        Channel.send({ embeds: [embed], components: [row1, row2, row3] })

    },
}
