const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => {
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune musique ne joue... Essaie encore ? ❌`, ephemeral: true });
    
    try {
        const search = await genius.songs.search(queue.currentTrack.title);

        const song = search.find(song => song.artist.name.toLowerCase() === queue.currentTrack.author.toLowerCase());
        if (!song) return inter.editReply({ content: `Aucun text trouvé pour ${queue.currentTrack.title}... Essaie encore ? ❌`, ephemeral: true });
        const lyrics = await song.lyrics();
        const embeds = [];
        for (let i = 0; i < lyrics.length; i += 4096) {
            const toSend = lyrics.substring(i, Math.min(lyrics.length, i + 4096));
            embeds.push(new EmbedBuilder()
                .setTitle(`Text pour ${queue.currentTrack.title}`)
                .setDescription(toSend)
                .setColor('#2f3136')
                .setTimestamp()
                .setFooter({ text: 'Par Zerio ❤️ - Traduit par Nikki φ', iconURL: inter.member.avatarURL({ dynamic: true }) })
            );
        }
        return inter.editReply({ embeds: embeds, ephemeral: true });
    } catch (error) {
        inter.editReply({ content: `Erreur ! Contactez les developpeurs ! | ❌`, ephemeral: true });
    }
}
