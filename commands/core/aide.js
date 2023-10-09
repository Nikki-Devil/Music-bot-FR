const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'aide',
    description: "toutes les commandes !",
    showHelp: false,

    execute({ client, inter }) {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true }) })
        .setDescription("Ce code proviens du project GitHub [ZerioDev/Music-bot](https://github.com/ZerioDev/Music-bot), traduit dans le projer [Nikki-Devil/Music-bot-FR](https://github.com/Nikki-Devil/Music-bot-FR).\nL'utilisation de celui-ci est possible tant que les crédits sont présent.\nSi vous voulez enlever les crédits, demandez sur le server Discord de support (anglais) [ici](https://discord.gg/5cGSYV8ZZj)")
        .addFields([ { name: `Enabled - ${commands.size}`, value: commands.map(x => `\`${x.name}\``).join(' | ') } ])
        .setTimestamp()
        .setFooter({ text: 'Par Zerio ❤️ - Traduit par Nikki φ', iconURL: inter.member.avatarURL({ dynamic: true })});

        inter.editReply({ embeds: [embed] });
    },
};
