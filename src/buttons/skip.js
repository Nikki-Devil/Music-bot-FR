module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune musique ne joue... Essaie encore ? ❌`, ephemeral: true });
    
    const success = queue.node.skip();

    return inter.editReply({ content: success ? `La musique ${queue.currentTrack.title} a été sautée ✅` : `Il y a eu une erreur... Essaie encore ? ❌`, ephemeral: true});
}
