module.exports = async ({ inter, queue }) => {
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune musique ne joue... Essaie encore ? ❌`, ephemeral: true });

    const resumed = queue.node.resume();
    let message = `Musique ${queue.currentTrack.title} reprise ✅`;
    
    if (!resumed) {
        queue.node.pause();
        message = `Musique ${queue.currentTrack.title} en pause ✅`;
    }

    return inter.editReply({
        content: message, ephemeral: true
    });
}
