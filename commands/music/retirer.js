const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'retirer',
    description: "enlève une musique de la liste",
    voiceChannel: true,
    options: [
        {
            name: 'musique',
            description: 'nom ou url de la musique à enlever',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'place',
            description: 'place dans la liste',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const player = useMainPlayer()

        const number =  inter.options.getNumber('place')
        const track = inter.options.getString('musique');

const queue = useQueue(inter.guild);

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune musique ne joue... Essaie encore ? ❌`, ephemeral: true });
        if (!track && !number) inter.editReply({ content: `Vous devez utiliser une des options pour enlever une musique de la liste... Essaie encore ? ❌`, ephemeral: true });

        const BaseEmbed = new EmbedBuilder()
        .setColor('#2f3136')


        if (track) {
            const track_to_remove = queue.tracks.toArray().find((t) => t.title === track || t.url === track);
            if (!track_to_remove) return inter.editReply({ content: `${track} n'a pas pu être trouvé... Essaie encore en utilisant le nom complet ou l'url ? ❌`, ephemeral: true });
            queue.removeTrack(track_to_remove);
            BaseEmbed.setAuthor({name: `${track_to_remove.title} a été enlevé de la liste ✅` })

            return inter.editReply({ embeds: [BaseEmbed] });
        }

        if (number) {

            const index = number - 1
            const trackname = queue.tracks.toArray()[index].title

            if (!trackname) return inter.editReply({ content: `Cette musique ne semble pas être dans la liste... Essaie encore ? ❌`, ephemeral: true });   

            queue.removeTrack(index);

            BaseEmbed.setAuthor({name: `removed ${trackname} from the queue ✅` })

            return inter.editReply({ embeds: [BaseEmbed] });
        }


         
    }
}
