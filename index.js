const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
  token: "ODc2NDU2MTkxMzE0Nzc2MDg1.YRkVbw.0w3aVwitT5Sfis6JMarvPBx3Z08", 
  prefix: ["!", "<@$clientID>", "<@!$clientID>"],
  fetchInvites: true,
})

bot.status(require('./essentials/status.js'))
bot.variables(require('./essentials/variables.js'))
 
bot.onMessage()

bot.onJoined()
bot.onLeave()
bot.onInviteCreate()
bot.onInviteDelete()
bot.onBanAdd()
bot.onGuildJoin()
bot.onGuildLeave()

bot.loadCommands(`./commands/`)
console.log(Object.keys(bot.client.variables).join("\n"))
require('@weky/inlinereply')