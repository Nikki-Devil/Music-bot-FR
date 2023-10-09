const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { useMainPlayer, useQueue } = require('discord-player');

module.exports = {
    name: 'encours',
    description: 'regarde ce qui jour actuellement',
    voiceChannel: true,

    execute({ inter }) {
const queue = useQueue(inter.guild);
        const player = useMainPlayer()

        if (!queue) return inter.editReply({ content: `Aucun résultat trouvé... Essaie encore ? ❌`, ephemeral: true });

        const track = queue.currentTrack;

        const methods = ['désactivé', 'musique', 'liste'];

        const timestamp = track.duration;

        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        const progress = queue.node.createProgressBar();
        

        const embed = new EmbedBuilder()
        .setAuthor({ name: track.title,  iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setThumbnail(track.thumbnail)
        .setDescription(`Volume **${queue.node.volume}**%\ndurée **${trackDuration}**\nTemps ${progress}\nBoucle **${methods[queue.repeatMode]}**\nAjouté par ${track.requestedBy}`)
        .setFooter({ text: 'Par Zerio ❤️ - Traduit par Nikki φ', iconURL: inter.member.avatarURL({ dynamic: true })})
        .setColor('#2f3136')
        .setTimestamp()

        const saveButton = new ButtonBuilder()
        .setLabel('Sauvegarde cette musique')
        .setCustomId(JSON.stringify({ffb: 'savetrack'}))
        .setStyle('Danger')

        const volumeup = new ButtonBuilder()
        .setLabel('Volume +')
        .setCustomId(JSON.stringify({ffb: 'volumeup'}))
        .setStyle('Primary')

        const volumedown = new ButtonBuilder()
        .setLabel('Volume -')
        .setCustomId(JSON.stringify({ffb: 'volumedown'}))
        .setStyle('Primary')

        const loop = new ButtonBuilder()
        .setLabel('Boucle')
        .setCustomId(JSON.stringify({ffb: 'loop'}))
        .setStyle('Danger')

        const resumepause = new ButtonBuilder()
         .setLabel('Pause / Play')
         .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
         .setStyle('Success')



        const row = new ActionRowBuilder().addComponents(volumedown, saveButton, resumepause, loop, volumeup);

         inter.editReply({ embeds: [embed], components: [row] });
    },
};
