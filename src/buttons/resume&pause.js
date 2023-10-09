module.exports = async ({ inter, queue }) => {
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune sonate ne joue... Essaie encore ? ❌`, ephemeral: true });

    const resumed = queue.node.resume();
    let message = `Sonate ${queue.currentTrack.title} reprise ✅`;
    
    if (!resumed) {
        queue.node.pause();
        message = `Sonate ${queue.currentTrack.title} en pause ✅`;
    }

    return inter.editReply({
        content: message, ephemeral: true
    });
}
