const ms = require('ms');
const {  ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'seek',
    description: 'saute ou reviens dans le temps dans une musique',
    voiceChannel: true,
    options: [
    {
        name: 'time',
        description: 'temps à rejouer/sauter',
        type: ApplicationCommandOptionType.String,
        required: true,
    }
    ],
    async execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune musique ne joue... Essaie encore ? ❌`, ephemeral: true });

        const timeToMS = ms(inter.options.getString('time'));

        if (timeToMS >= queue.currentTrack.durationMS) return inter.editReply({ content:`Le temps indiqué est plus grand que le temps total de la musique actuelle... Essaie encore ? ❌\n*Essayez un temps valide tel que **5s, 10s, 20 seconds, 1m**...*`, ephemeral: true });

        await queue.node.seek(timeToMS);

        const SeekEmbed = new EmbedBuilder()
        .setColor('#2f3136')
        .setAuthor({name: `Temps joué/sauté : **${ms(timeToMS, { long: true })}** ✅`})


        inter.editReply({ embeds: [SeekEmbed] });
    },
};
