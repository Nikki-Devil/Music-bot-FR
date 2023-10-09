const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'reprendre',
    description: 'reprends la sonate',
    voiceChannel: true,

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue) return inter.editReply({ content: `Aucune sonate ne joue... Essaie encore ? ❌`, ephemeral: true });
        

        if(queue.node.isPlaying()) return inter.editReply({content: `La sonate est déjà en cours... Essaie encore ? ❌`, ephemeral: true})

        const success = queue.node.resume();
        
        const ResumeEmbed = new EmbedBuilder()
        .setAuthor({name: success ? `La sonate ${queue.currentTrack.title} a été reprise ✅` : `Il y a eu une erreur... Essaie encore ? ❌` })
        .setColor('#2f3136')
        
        return inter.editReply({ embeds: [ResumeEmbed] });

    },
};
