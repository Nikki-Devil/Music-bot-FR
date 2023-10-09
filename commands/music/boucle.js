const { QueueRepeatMode, useMainPlayer, useQueue } = require('discord-player');
const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'boucle',
    description: 'active ou désactive la fonction de boucle',
    voiceChannel: true,
    options: [
        {
        name: 'action' ,
        description: 'quelle action faire sur la boucle',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'Liste', value: 'enable_loop_queue' },
            { name: 'Désactiver', value: 'disable_loop'},
            { name: 'Musique', value: 'enable_loop_song' },
            { name: 'AutoPlay (Youtube)', value: 'enable_autoplay' },
            { name: 'Queue', value: 'enable_loop_queue' },
            { name: 'Disable', value: 'disable_loop'},
            { name: 'Song', value: 'enable_loop_song' },
            { name: 'AutoPlay', value: 'enable_autoplay' },
        ],
    }
    ],
    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);
        let BaseEmbed = new EmbedBuilder()
        .setColor('#2f3136')

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucun résultat trouvé... Essaie encore ? ❌`, ephemeral: true });
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.repeatMode === QueueRepeatMode.TRACK) return inter.editReply({ content:`Vous devez d'abord désactiver la boucle sur la musique (/loop Disable ou /loop Désactiver)... Essaie encore ? ❌`, ephemeral: true });

                const success = queue.setRepeatMode(QueueRepeatMode.QUEUE);
                
                BaseEmbed.setAuthor({ name: success ? `Il y a eu une erreur... Essaie encore ? ❌` : `Mode boucle activé sur la liste 🔁` })

                return inter.editReply({ embeds: [BaseEmbed] });
                
            }
            case 'disable_loop': {
                if (queue.repeatMode === QueueRepeatMode.OFF) return inter.editReply({ content:`Vous devez d'abord activer la boucle sur la musique (/loop Queue/Liste ou /loop Song/Liste)... Essaie encore ? ❌`, ephemeral: true });
                
                const success = queue.setRepeatMode(QueueRepeatMode.OFF);

                BaseEmbed.setAuthor({ name: success ? `Il y a eu une erreur... Essaie encore ? ❌` : `Mode boucle désactivé.`})

                return inter.editReply({ embeds: [BaseEmbed] });
                
            }
            case 'enable_loop_song': {
                if (queue.repeatMode === QueueRepeatMode.QUEUE) return inter.editReply({ content:`Vous devez d'abord désactiver la boucle sur la musique (/loop Disable ou /loop Désactiver)... Essaie encore ? ❌`, ephemeral: true });

                const success = queue.setRepeatMode(QueueRepeatMode.TRACK);

                BaseEmbed.setAuthor({ name: success ? `Il y a eu une erreur... Essaie encore ? ❌` : `Mode boucle activé sur la musique 🔂` })

                return inter.editReply({ embeds: [BaseEmbed] });
                
            }
            case 'enable_autoplay': {
                if (queue.repeatMode === QueueRepeatMode.AUTOPLAY) return inter.editReply({ content:`Vous devez d'abord désactiver la boucle sur la musique (/loop Disable ou /loop Désactiver)... Essaie encore ? ❌`, ephemeral: true });

                const success = queue.setRepeatMode(QueueRepeatMode.AUTOPLAY);

                BaseEmbed.setAuthor({ name: success ? `Il y a eu une erreur... Essaie encore ? ❌` : `AutoPlay activé, des musiques similaires seront joué par la suite.` })

                return inter.editReply({ embeds: [BaseEmbed] });

            }
        }
       
    },
};
