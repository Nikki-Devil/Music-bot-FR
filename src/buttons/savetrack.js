const { EmbedBuilder } = require('discord.js')

module.exports = async ({ inter, queue }) => {
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune musique ne joue... Essaie encore ? ❌`, ephemeral: true });

    inter.member.send({
        embeds: [
            new EmbedBuilder()
                .setColor('Red')
                .setTitle(`:arrow_forward: ${queue.currentTrack.title}`)
                .setURL(queue.currentTrack.url)
                .addFields(
                    { name: ':hourglass: durée:', value: `\`${queue.currentTrack.duration}\``, inline: true },
                    { name: 'Musique par:', value: `\`${queue.currentTrack.author}\``, inline: true },
                    { name: 'Vues :eyes:', value: `\`${Number(queue.currentTrack.views).toLocaleString()}\``, inline: true },
                    { name: 'URL:', value: `\`${queue.currentTrack.url}\`` }
                )
                .setThumbnail(queue.currentTrack.thumbnail)
                .setFooter({ text: `Du server ${inter.member.guild.name}`, iconURL: inter.member.guild.iconURL({ dynamic: false }) })
        ]
    }).then(() => {
        return inter.editReply({ content: `Je vous ai envoyé le titre de la musique en privée ✅`, ephemeral: true });
    }).catch(error => {
        return inter.editReply({ content: `Impossible de vous envoyer un message privé, vérifiez vos paramètres... Essaie encore ? ❌`, ephemeral: true });
    });


}
