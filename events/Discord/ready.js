module.exports = async (client) => {
    console.log(`Logged to ${client.user.username}\nLet's play some music !`);
    client.user.setActivity(client.config.app.playing);   
};
