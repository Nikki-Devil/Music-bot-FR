const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'skipto',
    description: "saute une/à une sonate",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: "le nom/l'url de la sonate voulue",
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'la place dans la liste de la sonate voulue',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const player = useMainPlayer()

        const track = inter.options.getString('song');
        const number =  inter.options.getNumber('number')

const queue = useQueue(inter.guild);

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune sonate ne joue... Essaie encore ? ❌`, ephemeral: true });
        if (!track && !number) inter.editReply({ content: `Vous devez utiliser une des options pour sauter à une sonate... Essaie encore ? ❌`, ephemeral: true });

            if (track) {
                const track_skipto = queue.tracks.toArray().find((t) => t.title.toLowerCase() === track.toLowerCase() || t.url === track)
                if (!track_skipto) return inter.editReply({ content: `${track} n'a pas été trouvé... Essayez d'utiliser l'url ou le nom complet de la sonate ? ❌`, ephemeral: true });
                queue.node.skipTo(track_skipto);
                return inter.editReply({ content: `Sauté à ${track_skipto.title}  ✅` });
    }
    if (number) {
        const index = number - 1
        const trackname = queue.tracks.toArray()[index].title
        if (!trackname) return inter.editReply({ content: `Cette sonate n'est pas dans la liste... Essaie encore ?❌`, ephemeral: true });   
        queue.node.skipTo(index);

        const skipToEmbed = new EmbedBuilder()
        .setAuthor({name: `Sauté à ${trackname} ✅`})
        .setColor('#2f3136')
        
        inter.editReply({ embeds: [skipToEmbed] });
    }
         
    }
}
