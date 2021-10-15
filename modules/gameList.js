async function gameList(msg) {    
    console.log(msg.content);
    const user = msg.author.username
    if (msg.content === "#gamelist") {
        const Discord = require('discord.js-v11')
        const embed = new Discord.MessageEmbed()
            .setColor ('#ffffff') 
            .addFields(
            { name:  'Welcome! If you play any games, you can ```#add``` or ```#remove``` games from the following list to your profile. If anybody in the server adds the same games as you, youll be able to @ the abbreviation of the game and talk to members with the same game.', value: '\u200B' },
            { name: '▫️ABBREVIATION▫️', value: "AMOGUS\nAPEX\nB4BL\nCSGO\nDBZ\nDIABLO\nDOOM\nFF14\nFORTNITE\nGENSHIN\nGUILTYGEAR\nGTA5\nHALO\nKFLR2\nLEAGUE\nL4D2\nMINECRAFT\nMKT8\nMK11\nMVC2\nMVC3\nOVERWATCH\nPOE\nPHASMA\nPOWERRANGERS\nSMASH\nTEKKEN\nWOW", inline: true },
            { name: '▫️GAMES▫️', value: "Among Us\nApex Legends\nBack 4 Blood\nCounter Strike\nDragonball Fighter Z\nDiablo 3\nDoom Eternal\nFinal Fantasy 14\nFortnite\nGenshin Impact\nGuiltyGear Strive\nGrand Theft Auto 5\nHalo Infinite\nKilling Floor 2\nLeague of Legends\nLeft 4 Dead 2\nMinecraft\nMario Kart 8\nMortal Kombat 11\nMarvel Vs Capcom 2\nMarvel Vs Capcom 3\nOverwatch\nPath of Exile\nPhasmaphobia\nPower Rangers: Battle for the Grid\nSuper Smash Bros: Ultimate\nTekken 7\nWorld of Warcraft", inline: true },    
            )
            .setFooter("👾   Use #commands if you need more help adding / removing games!  👾")
            .setTitle ('GAME LIST: ')
        msg.reply(embed);
    console.log(user.toString() + ' has used the #gamelist command.')
    }     
}

module.exports = gameList