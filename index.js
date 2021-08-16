const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
  token: "ODc2NDU2MTkxMzE0Nzc2MDg1.YRkVbw.0w3aVwitT5Sfis6JMarvPBx3Z08", 
  prefix: ["!", "<@$clientID>", "<@!$clientID>"],
})

bot.status(require('./essentials/status.js'))
 
bot.onMessage()

bot.variables(require('./essentials/variables.js'))

bot.loadCommands(`./commands/`)
console.log(Object.keys(bot.client.variables).join("\n"))