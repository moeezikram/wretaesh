module.exports = {
channel: "877907242685440011",
type: "joinCommand",
code: `$setUserVar[invite;$sum[$getUserVar[invite;$userInfo[inviter]];1];$userInfo[inviter]]` 
}