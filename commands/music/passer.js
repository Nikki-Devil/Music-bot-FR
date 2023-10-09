const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'passer',
    description: 'saute la musique',
    voiceChannel: true,

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

         if (!queue || !queue.isPlaying()) return inter.editReply({ content:`Aucune musique ne joue... Essaie encore ? ❌`, ephemeral: true });

        const success = queue.node.skip();

        const SkipEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: success ? `La musique ${queue.currentTrack.title} a été sautée ✅` : `Il y a eu une erreur... Essaie encore ? ❌` })


       return inter.editReply({ embeds: [SkipEmbed] });

    },
};
