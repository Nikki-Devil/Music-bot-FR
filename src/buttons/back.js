module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune sonate ne joue... Essaie encore ? ❌`, ephemeral: true });

    if (!queue.history.previousTrack) return inter.editReply({ content: `Il n'y avait pas de sonate avant celle-ci... Essaie encore ? ❌`, ephemeral: true });

    await queue.history.back();

    inter.editReply({ content:`Jour la sonate **précédente** ✅`, ephemeral: true});
}
