const { EmbedBuilder } = require('discord.js');

module.exports = (queue, error) => {
    
    const ErrorEmbed = new EmbedBuilder()
    .setAuthor({name: `Le Bot a eu un problème, contactez le developper !`, iconURL: track.thumbnail})
    .setColor('#EE4B2B')

queue.metadata.send({ embeds: [ErrorEmbed] })

console.log(`Erreur émise par ${error.message}`);
}
