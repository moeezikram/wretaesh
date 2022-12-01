const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
  token: "NONE", 
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
