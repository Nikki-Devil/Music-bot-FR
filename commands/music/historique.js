const { EmbedBuilder } = require('discord.js');
const { useMainPlayer, useQueue } = require('discord-player');

module.exports = {
    name: 'historique',
    description: "regarder l'historique de la liste",
    voiceChannel: false,

    async execute({ inter }) {
const queue = useQueue(inter.guild);
        const player = useMainPlayer()

        if (!queue || queue.history.tracks.toArray().length == 0) return inter.editReply({ content: `Aucune musique n'a joué encore`, ephemeral: true });

        const tracks = queue.history.tracks.toArray();
        console.log(tracks)
        let description = tracks
            .slice(0, 20)
            .map((track, index) => { return `**${index + 1}.** [${track.title}](${track.url}) by ${track.author}` })
            .join('\r\n\r\n');

        let HistoryEmbed = new EmbedBuilder()
            .setTitle(`Historique`)
            .setDescription(description)
            .setColor('#2f3136')
            .setTimestamp()
            .setFooter({ text: 'Par Zerio ❤️ - Traduit par Nikki φ', iconURL: inter.member.avatarURL({ dynamic: true })})


        inter.editReply({ embeds: [HistoryEmbed] });

    },
};
