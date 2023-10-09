const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "ping le bot !",
    async execute({ client, inter }) {

        const m = await inter.editReply("Ping?")
        inter.editReply(`Pong! La latence API est de ${Math.round(client.ws.ping)}ms 🛰️, Dernier battement calculé il y a ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })}`)

    },
};
