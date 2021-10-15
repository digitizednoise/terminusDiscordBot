async function addRole(msg) {
    const games = require('./games.json')
    const user = msg.author.username
    const parts = msg.content.split(' ')
    if (parts[0] === "#add") {

        if(parts[1] === 'AMOGUS') {
                msg.member.roles.add(games.AMOGUS)
                msg.reply('Among Us has been added.')
                console.log(user.toString() + ' has added Among Us to their roles.')
        }
        else if (parts[1] === 'APEX' ) {
                msg.member.roles.add(games.APEX)
                msg.reply('Apex Legends has been added.')
                console.log(user.toString() + ' has added Apex Legends to their roles.')

        }
        else if (parts [1] === 'B4BL'){
            msg.member.roles.add(games.BACK4BLOOD)
            msg.reply('Back 4 Blood has been added.')
            console.log(user.toString() + ' has added Back 4 Blood to their roles.')
        }
        else if (parts[1] === 'CSGO'){
                msg.member.roles.add(games.CSGO)
                msg.reply('Counter-Strike has been added')
                console.log(user.toString() + ' has added Counter-Strike to their roles.')
        }
        else if (parts[1] === 'DBZ'){
                msg.member.roles.add(games.DBZ)
                msg.reply('DBZ Fighters has been added.')
                console.log(user.toString() + ' has added DBZ Fighters to their roles.')
        }
        else if (parts [1] === 'DIABLO'){
                msg.member.roles.add(games.DIABLO)
                msg.reply('Diablo 3 has been added.')
                console.log(user.toString() + ' has added Diablo 3 to their roles.')
        }
        else if (parts [1] === 'DOOM'){
            msg.member.roles.add(games.DOOM)
            msg.reply('Doom Eternal has been added.')
            console.log(user.toString() + ' has added Doom Eternal to their roles.')
        }
        else if (parts [1] === 'FF14'){
            msg.member.roles.add(games.FF14)
            msg.reply('Final Fantasy 14 has been added.')
            console.log(user.toString() + ' has added Final Fantasy 14 to their roles.')
        }
        else if (parts [1] === 'FORTNITE'){
            msg.member.roles.add(games.FORTNITE)
            msg.reply('Fortnite has been added.')
            console.log(user.toString() + ' has added Fortnite to their roles.')
        }
        else if (parts [1] === 'GENSHIN'){
            msg.member.roles.add(games.GENSHIN)
            msg.reply('Genshin Impact has been added.')
            console.log(user.toString() + ' has added Genshin Impact to their roles.')
        }
        else if (parts [1] === 'GUILTYGEAR'){
            msg.member.roles.add(games.GUILTYGEAR)
            msg.reply('Guilty Gear: Strive has been added.')
            console.log(user.toString() + ' has added Guilty Gear: Strive to their roles.')
        }
        else if (parts [1] === 'GTA5'){
            msg.member.roles.add(games.GTA5)
            msg.reply('Grand Theft Auto V has been added.')
            console.log(user.toString() + ' has added Grand Theft Auto V to their roles.')
        }
        else if (parts [1] === 'HALO'){
            msg.member.roles.add(games.HALO)
            msg.reply('Halo Infinite has been added.')
            console.log(user.toString() + ' has added Halo Infinite to their roles.')
        } 
        else if (parts [1] === 'KFLR2'){
            msg.member.roles.add(games.KFLR2)
            msg.reply('Killing Floor 2 has been added.')
            console.log(user.toString() + ' has added Killing Floor 2 to their roles.')
        }
        else if (parts [1] === 'LEAGUE'){
            msg.member.roles.add(games.LEAGUE)
            msg.reply('League of Legends has been added.')
            console.log(user.toString() + ' has added League of Legends to their roles.')
        }
        else if (parts [1] === 'L4D2'){
            msg.member.roles.add(games.L4D2)
            msg.reply('Left 4 Dead 2 has been added.')
            console.log(user.toString() + ' has added Left 4 Dead to their roles.')
        }
        else if (parts [1] === 'MINECRAFT'){
            msg.member.roles.add(games.MINECRAFT)
            msg.reply('Minecraft has been added.')
            console.log(user.toString() + ' has added Minecraft to their roles.')
        }
        else if (parts [1] === 'MKT8'){
            msg.member.roles.add(games.MKT8)
            msg.reply('Mario Kart 8 has been added.')
            console.log(user.toString() + ' has added Mario Kart 8 to their roles.')
        }
        else if (parts [1] === 'MK11'){
            msg.member.roles.add(games.MK11)
            msg.reply('Mortal Kombat 11 has been added.')
            console.log(user.toString() + ' has added Mortal Kombat 11 to their roles.')
        }
        else if (parts [1] === 'MVC2'){
            msg.member.roles.add(games.MVC2)
            msg.reply('Marvel vs Capcom 2 has been added.')
            console.log(user.toString() + ' has added Marvel vs Capcom 2 to their roles.')
        }
        else if (parts [1] === 'MVC3'){
            msg.member.roles.add(games.MVC3)
            msg.reply('Marvel vs Capcom 3 has been added.')
            console.log(user.toString() + ' has added Marvel vs Capcom 3 to their roles.')
        }
        else if (parts [1] === 'OVERWATCH'){
            msg.member.roles.add(games.OVERWATCH)
            msg.reply('Overwatch has been added.')
            console.log(user.toString() + ' has added Overwatch to their roles.')
        }
        else if (parts [1] === 'PHASMA'){
            msg.member.roles.add(games.PHASMA)
            msg.reply('Phasmaphobia has been added.')
            console.log(user.toString() + ' has added Phasmaphobia to their roles.')
        }
        else if (parts [1] === 'POE'){
            msg.member.roles.add(games.POE)
            msg.reply('Path of Exile has been added.')
            console.log(user.toString() + ' has added Path of Exile to their roles.')
        }
        else if (parts [1] === 'POWERRANGERS'){
            msg.member.roles.add(games.POWERRANGERS)
            msg.reply('Power Rangers: Fight for the future has been added.')
            console.log(user.toString() + ' has added Power Rangers to their roles.')
        }
        else if (parts [1] === 'SMASH'){
            msg.member.roles.add(games.SMASH)
            msg.reply('Super Smash Bros Ultimate has been added.')
            console.log(user.toString() + ' has added Super Smash Bros: Ultimate to their roles.')
        }
        else if (parts [1] === 'SF5' ){
            msg.member.roles.add(games.SF5)
            msg.reply('Street Fighter V has been added.')
            console.log(user.toString() + ' has added Street Fighter 5 to their roles.')
        }
        else if (parts [1] === 'TEKKEN'){
            msg.member.roles.add(games.TEKKEN)
            msg.reply('Tekken 7 has been added.')
            console.log(user.toString() + ' has added Tekken 7 to their roles.')
        }
        else if (parts [1] === 'WOW'){
             msg.member.roles.add(games.WOW)
            msg.reply('World of Warcraft has been added.')
            console.log(user.toString() + ' has added World of Warcraft to their roles.')
        }

    }
}

module.exports = addRole