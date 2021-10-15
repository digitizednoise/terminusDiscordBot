async function removeRole(msg) {
    const games = require('./games.json')
    const user = msg.author.username
    const parts = msg.content.split(' ')
    if (parts[0] === "#remove") {

        if(parts[1] === 'AMOGUS'){
                msg.member.roles.remove(games.AMOGUS)
                msg.reply('Among Us has been removed.')
                console.log(user.toString() + ' has removed Among Us from their roles.')
        }
        else if (parts[1] === 'APEX' ){
                msg.member.roles.remove(games.APEX)
                msg.reply('Apex Legends has been removed.')
                console.log(user.toString() + ' has removed Apex Legends from their roles.')
        }
        else if (parts[1] === 'B4BL'){
            msg.member.roles.remove(games.BACK4BLOOD)
            msg.reply('Counter-Strike has been removed.')
            console.log(user.toString() + ' has removed Back 4 Blood from their roles.')
        }      
        else if (parts[1] === 'CSGO'){
                msg.member.roles.remove(games.CSGO)
                msg.reply('Counter-Strike has been removed.')
                console.log(user.toString() + ' has removed Counter-Strike from their roles.')
        }
        else if (parts[1] === 'DBZ'){
                msg.member.roles.remove(games.DBZ)
                msg.reply('Dragon Ball Fighter Z has been removed.')
                console.log(user.toString() + ' has removed DBZ Fighters from their roles.')
        }
        else if (parts[1] === 'DIABLO'){
            msg.member.roles.remove(games.DIABLO)
            msg.reply('Diablo 3 has been removed.')
            console.log(user.toString() + ' has removed Diablo 3 from their roles.')
        }      
        else if (parts [1] === 'DOOM'){
            msg.member.roles.remove(games.DOOM)
            msg.reply('Doom Eternal has been removed.')
            console.log(user.toString() + ' has removed Doom Eternal from their roles.')
        }
        else if (parts [1] === 'FF14'){
            msg.member.roles.remove(games.FF14)
            msg.reply('Final Fantasy 14 has been removed.')
            console.log(user.toString() + ' has removed Final Fantasy 14 from their roles.')
        }
        else if (parts [1] === 'FORTNITE'){
            msg.member.roles.remove(games.FORTNITE)
            msg.reply('Fortnite has been removed')
            console.log(user.toString() + ' has removed Fortnite from their roles.')
        }
        else if (parts [1] === 'GENSHIN'){
            msg.member.roles.remove(games.GENSHIN)
            msg.reply('Genshin Impact has been removed.')
            console.log(user.toString() + ' has removed Genshin Impact from their roles.')
        }
        else if (parts [1] === 'GUILTYGEAR'){
            msg.member.roles.remove(games.GUILTYGEAR)
            msg.reply('Guilty Gear Strive has been removed.')
            console.log(user.toString() + ' has removed Guilty Gear: Strive from their roles.')
        }
        else if (parts [1] === 'GTA5'){
            msg.member.roles.remove(games.GTA5)
            msg.reply('Grand Theft Auto V has been removed.')
            console.log(user.toString() + ' has removed Grand Theft Auto 5 from their roles.')
        }
        else if (parts [1] === 'HALO'){
            msg.member.roles.remove(games.HALO)
            msg.reply('Halo Infinite has been removed.')
            console.log(user.toString() + ' has removed Halo Infinite from their roles.')
        } 
        else if (parts [1] === 'LEAGUE'){
            msg.member.roles.remove(games.LEAGUE)
            msg.reply('League of Legends has been removed.')
            console.log(user.toString() + ' has removed League of Legends from their roles.')
        }
        else if (parts [1] === 'L4D2'){
            msg.member.roles.remove(games.L4D2)
            msg.reply('Left 4 Dead 2 has been removed.')
            console.log(user.toString() + ' has removed Left 4 Dead 2 from their roles.')
        }
        else if (parts [1] === 'MINECRAFT'){
            msg.member.roles.remove(games.MINECRAFT)
            msg.reply('Minecraft has been removed.')
            console.log(user.toString() + ' has removed Minecraft from their roles.')
        }
        else if (parts [1] === 'MKT8'){
            msg.member.roles.remove(games.MKT8)
            msg.reply('Mario Kart 8 hahs been removed.')
            console.log(user.toString() + ' has removed Mario Kart 8 from their roles.')
        }
        else if (parts [1] === 'MK11'){
            msg.member.roles.remove(games.MK11)
            msg.reply('Mortal Kombat 11 has been removed.')
            console.log(user.toString() + ' has removed Mortal Kombat 11 from their roles.')
        }
        else if (parts [1] === 'MVC2'){
            msg.member.roles.remove(games.MVC2)
            msg.reply('Marvel vs Capcom 2 has been removed.')
            console.log(user.toString() + ' has removed Marvel Vs Capcom 2 from their roles.')
        }
        else if (parts [1] === 'MVC3'){
            msg.member.roles.remove(games.MVC3)
            msg.reply('Marvel vs Capcom 3 has been removed.')
            console.log(user.toString() + ' has Marvel Vs Capcom 3 from their roles.')
        }
        else if (parts [1] === 'OVERWATCH'){
            msg.member.roles.remove(games.OVERWATCH)
            msg.reply('Overwatch has been removed.')
            console.log(user.toString() + ' has removed Overwatch from their roles.')
        }
        else if (parts [1] === 'PHASMA'){
            msg.member.roles.remove(games.PHASMA)
            msg.reply('Phasmaphobia has been removed.')
            console.log(user.toString() + ' has removed Phasmaphobia from their roles.')
        }
        else if (parts [1] === 'POE'){
            msg.member.roles.remove(games.POE)
            msg.reply('Path of Exile has been removed.')
            console.log(user.toString() + ' has removed Path of Exile from their roles.')
        }
        else if (parts [1] === 'POWERRANGERS'){
        msg.member.roles.remove(games.POWERRANGERS)
        msg.reply('Power Rangers: Fight for the future been removed.')
        console.log(user.toString() + ' has removed Power Rangers: Battle for the Grid from their roles.')
        }
        else if (parts [1] === 'SMASH'){
            msg.member.roles.remove(games.SMASH)
            msg.reply('Super Smash Bros Ultimate has  been removed.')
            console.log(user.toString() + ' has removed Super Smash Bros: Ultimate from their roles.')
        }
        else if (parts [1] === 'SF5' ){
            msg.member.roles.remove(games.SF5)
            msg.reply('Street Fighter V has been removed.')
            console.log(user.toString() + ' has removed Street Fighter 5 from their roles.')
        }
        else if (parts [1] === 'TEKKEN'){
            msg.member.roles.remove(games.TEKKEN)
            msg.reply('Tekken 7 has been removed.')
            console.log(user.toString() + ' has removed Tekken 7 from their roles.')
        }
        else if (parts [1] === 'WOW'){
            msg.member.roles.remove(games.WOW)
            msg.reply('World of Warcraft has been removed.')
            console.log(user.toString() + ' has removed World of Warcraft from their roles.')
        }


    }
}

module.exports = removeRole