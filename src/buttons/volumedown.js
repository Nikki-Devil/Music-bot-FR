const maxVol = client.config.opt.maxVol;

module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.isPlaying()) return inter.editReply({ content: `Aucune sonate ne joue... Essaie encore ? ❌`, ephemeral: true });

        const vol = Math.floor(queue.node.volume - 5)

        if (vol < 0 ) return inter.editReply({ content: `Tu ne peux pas baisser plus le volume... Essaie encore ? ? ❌`, ephemeral: true })
        
        if (queue.node.volume === vol) return inter.editReply({ content: `Le volume demandé est déjà appliqué... Essaie encore ? ❌`, ephemeral: true });

        const success = queue.node.setVolume(vol);

        return inter.editReply({ content:success ? `Le volume a été modifié pour ${vol}/${maxVol}% 🔊` : `Il y a eu une erreur... Essaie encore ? ❌`, ephemeral: true});
}
