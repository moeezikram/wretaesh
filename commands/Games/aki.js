module.exports = {
name:"akinator",
aliases:"aki",
code:`
$djsEval[(async() => {
const Discord = require('discord.js');
const akinator = require('discord.js-akinator')

akinator(message, client, "en");
})();]
`
}