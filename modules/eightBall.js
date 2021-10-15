function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function eightBall(msg) {
  const Discord = require('discord.js-v11')
  var eightBallReplies = [':8ball: My reply is no, ', ':8ball: Outlook not so good, ', ':8ball: As I see it, yes, ', ':8ball: It is decidedly so, ', ':8ball: Without a doubt, ', ':8ball: Outlook good, ', ':8ball: Yes, ', ':8ball: Most likely, ', ':8ball: Signs point to yes, ', ':8ball: Did I ask, ', ':8ball: Reply hazy,', ':8ball: Dont count on it, ', ':8ball: I dont think so, ', ':8ball: Outlook not so good, ', ':8ball: No, ', ':8ball: Very doubtful, ' ]
  var randomNum = Math.floor(Math.random()*eightBallReplies.length)
  const user = msg.author.id;
  const username = msg.author.username
  const parts = msg.content.split(' ')
  if (parts[0] == '#magic8ball'){
      await sleep(2000);
      const embed = new Discord.MessageEmbed()
          .setColor ('#ffffff') 
          .setDescription(eightBallReplies[randomNum] + "<@" + user.toString() + ">" + ". :8ball:")
      msg.channel.send(embed)
    console.log(username.toString() + ' has used the #magic8ball command.')
  }
}

module.exports = eightBall