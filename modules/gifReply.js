async function gifReply(msg) {
    const Discord = require('discord.js-v11')
    const parts = msg.content.split(' ')
    const user = msg.mentions.users.first();
    const username = msg.author.username
    if (parts[0] == '#laughat'){
        const embed = new Discord.MessageEmbed()
            .setColor ('#ffffff') 
            .setImage ('https://media3.giphy.com/media/UU1bHu6QWyFxZM63Jh/giphy.gif?cid=790b76116f9511909e01fabd6b5e3b06afc8c1eae8210768&rid=giphy.gif&ct=g')
            .setTitle ('HAHAHAHAHAHA!')
            .setDescription(user.toString())
        msg.channel.send(embed)
        console.log(username.toString() + ' has used the #laughat command.')
    }
    else if (parts[0] == '#dancefor'){
        const embed = new Discord.MessageEmbed()
            .setColor ('#ffffff') 
            .setImage ('https://c.tenor.com/1iSARWJr-TEAAAAC/among-us-twerk.gif')
            .setTitle ('FOR YOU ~')
            .setDescription(user.toString())      
        msg.channel.send(embed)
        console.log(username.toString() + ' has used the #dancefor command.')

    }
    else if (parts[0] == '#prayfor'){
    const embed = new Discord.MessageEmbed()
        .setColor ('#ffffff')
        .setImage ('https://c.tenor.com/QvQlPfV8I-UAAAAd/oracion-jesus.gif')
        .setTitle ('THOUGHTS & PRAYERS.')
        .setDescription(user.toString())     
    msg.channel.send(embed)
    console.log(username.toString() + ' has used the #prayfor command.')
    }
        else if (parts[0] == '#fistbump'){
    const embed = new Discord.MessageEmbed()
        .setColor ('#ffffff')
        .setImage ('https://c.tenor.com/nFTwHmumVpsAAAAC/street-fighter-fistbump.gif')
        .setTitle ('YES!')
        .setDescription(user.toString())       
    msg.channel.send(embed)
    console.log(username.toString() + ' has used the #fistbump command.')
    }
        else if (parts[0] == '#cheerfor') {
    const embed = new Discord.MessageEmbed()
        .setColor ('#ffffff')
        .setImage ('https://c.tenor.com/d2NYSXokaK4AAAAC/pikachu-cheer-dance.gif')
        .setTitle (':face_with_symbols_over_mouth:')
        .setDescription(user.toString())       
    msg.channel.send(embed)
    console.log(username.toString() + ' has used the #cheerfor command.')
    }
}

module.exports = gifReply