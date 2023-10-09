const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'volume',
    description: 'ajuster le volume',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'choisi le volume',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue) return inter.editReply({ content: `Aucune musique ne joue... Essaie encore ? ❌`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.node.volume === vol) return inter.editReply({ content: `Le volume voulu est déjà appliqué... Essaie encore ? ❌`, ephemeral: true });

        const success = queue.node.setVolume(vol);

       return inter.editReply({ content: success ? `Le volume a été modifié pour ${vol}/${maxVol}% 🔊` : `Il y a eu une erreur... Essaie encore ? ❌` });
    },
};
