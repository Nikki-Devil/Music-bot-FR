const { EmbedBuilder } = require("discord.js");
const { useMainPlayer, useQueue  } = require('discord-player');

module.exports = {
    name: 'sauvegarder',
    description: 'sauvegarde la musique actuelle',
    voiceChannel: true,

    async execute({ inter }) {
        const player = useMainPlayer()

const queue = useQueue(inter.guild);

        if (!queue) return inter.editReply({ content: `Aucune musique ne joue... Essaie encore ? ❌`, ephemeral: true });

        inter.member.send({
            embeds: [
                new EmbedBuilder()
                    .setColor('#2f3136')
                    .setTitle(`:arrow_forward: ${queue.currentTrack.title}`)
                    .setURL(queue.currentTrack.url)
                    .addFields(
                        { name: ':hourglass: Durée:', value: `\`${queue.currentTrack.duration}\``, inline: true },
                        { name: 'Par:', value: `\`${queue.currentTrack.author}\``, inline: true },
                        { name: 'Vues :eyes:', value: `\`${Number(queue.currentTrack.views).toLocaleString()}\``, inline: true },
                        { name: 'URL:', value: `\`${queue.currentTrack.url}\`` }
                    )
                    .setThumbnail(queue.currentTrack.thumbnail)
                    .setFooter({text:`Depuis le serveur ${inter.member.guild.name}`, iconURL: inter.member.guild.iconURL({ dynamic: false })})
            ]
        }).then(() => {
            return inter.editReply({ content: `Je vous ai envoyé un message privé avec les informations de la musique ✅`, ephemeral: true });
        }).catch(error => {
            return inter.editReply({ content: `Impossible de vous envoyer un message privé, vérifiez vos paramètres... Essaie encore ? ❌`, ephemeral: true });
        });
    },
};
