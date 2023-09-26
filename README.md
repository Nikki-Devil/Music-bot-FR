# Music-bot

Un code complet à télécharger pour un bot de musique 🎧

Vous chercher un code pour un bot de musique ? Ce projet Open Source traduit est fait pour vous !

Si vous avez besoin d'aide sur le projet, allez sur le discord de l'autheur original Zerios en cliquant [ici](https://discord.gg/5cGSYV8ZZj) (discord et aide en anglais uniquement).


### ⚡ Configuration

Ouvrez le fichier de configuration `config.js` dans le dossier principal.

```js
module.exports = {
    app: {
        token: 'xxx',
        playing: 'Par Zerio ❤️ - Traduit par Nikki φ',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 29
            }
        }
    }
};
```

Configuration basique

- `app/token`, le token du bot récupéré sur le site [Discord Developers](https://discordapp.com/developers/applications).
- `app/playing`, l'activité du bot.
- `app/global`, si les commandes fonctionnent sur tout les serveurs ou un seul uniquement (si tous les serveurs, cela peut prendre jusqu'à une heure à être visible).
- `app/guild`, le serveur où les commandes "/" seront actives (applicable uniquement si l'option du dessus est active).
- `app/ExtraMessages`, cela augmente le nombre de message "spam" du bot, mais vous recevrez plus d'informations (non recommandé). 
- `opt/loopMessage`, si le message du lecteur du bot doit être renvoyé à chaque musique lorsqu'il est en mode répétition.

Configuration du mode DJ

- `opt/DJ/enabled`, si le mode DJ doit être actif ou non. 
- `opt/DJ/roleName`, le nom du rôle de DJ.
- `opt/DJ/commands`, la liste des commandes limités aux membres avec le rôle de DJ.

Configuration avancée (changez uniquement si vous savez ce que vous faites)

- `opt/maxVol`, le volume maximum qu'un utilisateur peut mettre.
- `opt/spotifyBridge`, Récupère les sons/playlistes Spotify et les remplace par les version Youtube, si possible (très recommendé).
- `opt/volume`, le volume par défaut.
- `opt/leaveOnEmpty`, si le bot doit quitter lorsqu'il n'y a plus de personne dans le vocal.
- `opt/leaveOnEmptyCooldown`, le temps avant que le bot ne parte lorsqu'il n'y a plus de personne dans le vocal.
- `opt/leaveOnEnd`, si le bot doit quitter une fois la liste de musique terminée.
- `opt/leaveOnEndCooldown`, le temps avant que le bot ne parte après avoir fini la liste de musique.
- `opt/discordPlayer`, options utilisé par discord-player
- `highWaterMark`, est à l'origine à 1 << 25, je l'ai monté à 1 << 29 afin d'éviter que le bot ne passe des "musiques" de plus de 15/30min.

### 📑 Installation

Pour utiliser ce projet correctement vous aurez besoin de :

[FFmpeg](https://www.ffmpeg.org) pour gérer l'audio.

[Node JS](https://nodejs.org/fr/) (v16.9 ou +) pour lancer le bot.

[Npm](https://nodejs.org/fr/) pour télécharger les dépendances.

Sans oublier l'éditeur de texte/code, [visual studio code](https://code.visualstudio.com/) est recommandé mais le bon vieu bloc-note suffit.


Maintenant, dans le CMD/Terminal, allez dans le répertoire du projet ( `cd REPERTOIRE` ) puis faites cette commandes :

`npm install` (pour télécharger les dépendances)

Modifiez le fichier `config.js`, le minimum requis est de changer le token "xxx" par celui de votre bot.

Pour lancer le bot une fois ceci fait, faites :

`node .` (ou `npm start`)

Fait par [ZerioDev](https://github.com/ZerioDev).
Traduit et modifié par [Nikki Devil](https://github.com/Nikki-Devil)

N'enlevez pas la licence ou les crédits du projet. 

Pour avoir avoir le droit d'enlever les crédits, veuillez vous référer à la page d'[origine du bot](https://github.com/ZerioDev/Music-bot).
To have full access to the project and to be able to withdraw the credits a small donation is accepted.
