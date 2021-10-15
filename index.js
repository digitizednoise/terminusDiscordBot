//Bot Start-up

console.log('Starting Up');
const Discord = require('discord.js-v11');
const client = new Discord.Client();
const config = require('./config.json');
const addRole = require('./modules/addRoles.js')
const removeRole = require('./modules/removeRoles.js');
const commandsList = require ('./modules/commands.js');
const gameList = require ('./modules/gameList.js');
const eightBall = require('./modules/eightBall.js');
const gifReply = require('./modules/gifReply.js');

client.login (config.login);
client.on ('ready',readyDiscord);

function readyDiscord(){
    console.log('Ready to classify 👾.');
}

//Add Role
client.on('message',addRole);

//Remove Role
client.on('message',removeRole);

//Commands-list
client.on ('message',commandsList);

//gamesList
client.on ('message',gameList);

//Eightball
client.on('message', eightBall);

//gifReply
client.on('message',gifReply);

// Future V1.2 Update Plans:
    //Add a weatherReport function that grabs the weather from a zipcode.
    //Convert from V11 to V13