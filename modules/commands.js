async function commandsList(msg) {
    const Discord = require('discord.js-v11')    
    console.log(msg.content);
    const user = msg.author.username
    if (msg.content === "#commands") {
        
        const embed = new Discord.MessageEmbed()
            .setColor ('#ffffff') 
            .addFields(
                { name: '```#add```', value: '- Add games to your profile: (#add DBZ)' },
                { name: '```#remove```', value: '- Removes game on your role list: (#remove LEAGUE)',},
                { name: '```#gamelist```', value: '- Shows list of games avaiable to add / remove: (#gamelist)',},
                { name: '```#magic8ball```',  value: '- Ask me a question :8ball:. (#magic8ball am I going to be lucky today?)', },
                { name: '```#commands```', value: '- Shows this entire help message again: (#commands)',},
                { name: 'Use ```#prayfor```, ```#laughat```, ```#dancefor```, ```#cheerfor```, or ```#fistbump``` while tagging a user to send a gif reaction...appropriate to how you feel!', value: '\u200B' },
            )
            .setFooter("👾   Welcome!  👾")
            .setTitle ('COMMAND LIST:')
        msg.reply(embed);
    console.log(user.toString() + ' has used the #commands command.')
    }     
}
module.exports = commandsList