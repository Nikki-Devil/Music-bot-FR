const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune sonate ne joue... Essaie encore ? ❌`, ephemeral: true });

    const track = queue.currentTrack;

    const methods = ['désactivé', 'sonate', 'liste'];

    const timestamp = track.duration;
    
    const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

    const progress = queue.node.createProgressBar();
    

    const embed = new EmbedBuilder()
    .setAuthor({ name: track.title,  iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
    .setThumbnail(track.thumbnail)
    .setDescription(`Volume **${queue.node.volume}**%\nDurée **${trackDuration}**\nAvancée ${progress}\nBoucle **${methods[queue.repeatMode]}**\nAjouté par ${track.requestedBy}`)
    .setFooter({ text: 'Par Zerio ❤️ - Traduit par Nikki φ', iconURL: inter.member.avatarURL({ dynamic: true })})
    .setColor('ff0000')
    .setTimestamp()

    inter.editReply({ embeds: [embed], ephemeral: true });
}
