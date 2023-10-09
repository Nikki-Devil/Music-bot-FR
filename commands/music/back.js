const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');
module.exports = {
    name: 'back',
    description: "retourne à la sonate précédente",
    voiceChannel: true,

    async execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue || !queue.node.isPlaying()) return inter.editReply({ content: `Aucune sonate ne joue... Essaie encore ? ❌`, ephemeral: true });

        if (!queue.history.previousTrack) return inter.editReply({ content: `Aucune sonate ne jouais avant celle-ci... Essaie encore ? ❌`, ephemeral: true });

        await queue.history.back();

        const BackEmbed = new EmbedBuilder()
        .setAuthor({name: `Joue la sonate précédente ✅`})
        .setColor('#2f3136')

        inter.editReply({ embeds: [BackEmbed] });
    },
};
