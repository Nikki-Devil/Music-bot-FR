const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');
module.exports = {
    name: 'retour',
    description: "retourne à la musique précédente",
    voiceChannel: true,

    async execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue || !queue.node.isPlaying()) return inter.editReply({ content: `Aucune musique ne joue... Essaie encore ? ❌`, ephemeral: true });

        if (!queue.history.previousTrack) return inter.editReply({ content: `Aucune musique ne jouais avant celle-ci... Essaie encore ? ❌`, ephemeral: true });

        await queue.history.back();

        const BackEmbed = new EmbedBuilder()
        .setAuthor({name: `Joue la musique précédente ✅`})
        .setColor('#2f3136')

        inter.editReply({ embeds: [BackEmbed] });
    },
};
