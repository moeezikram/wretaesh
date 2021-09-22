module.exports = {
name: "serverinfo",
aliases: ["serverprofile", "server", "server-info", "server-profile"],
code:  `
$author[$serverName[$guildID] Info;https://cdn.discordapp.com/emojis/603234194054840337.gif?v=1]
$thumbnail[$getVar[icons]]
$addField[Server Creation Date;$creationDate[$guildID;time];no]
$addfield[Server Region; $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;brazil;Brazil];europe;Europe];hong kong;Hong Kong];eua;Eua];india;India];japan;Japan];yes]
$addField[Server Features;$replaceText[$replaceText[$checkCondition[$serverFeatures==];true;No Features];false;$serverFeatures];yes]
$addField[Verification; $serverVerificationLevel;yes]
$addField[Ban Count; $banCount;yes]
$addField[Roles; $roleCount;yes]
$addField[Emojis; $emojiCount Emojis;yes]
$addField[Server Boost; $serverBoostCount (Level $serverBoostLevel);yes]
$addField[Channels; $channelCount[text] Text 
Voice;yes]
$addField[Description;$replaceText[$replaceText[$checkCondition[$serverDescription==];true;No Description];false;$serverDescription];yes]
$addField[Members;$sum[$membersCount[$guildID;online];$membersCount[$guildID;idle];$membersCount[$guildID;dnd]] Online 
 $numberSeparator[$membersCount] Offline;yes]
$addfield[Members ;ㅤ$membersCount;yes]
$addField[Owner;<@$ownerID>;yes]
$addField[Server ID;$guildID;yes]
$color[$getVar[color]]`
}