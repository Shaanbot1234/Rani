const fs = require("fs");
module.exports.config = {
  name: "OWNER",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Candy", 
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("owner") ||
     react.includes("Owner") || 
react.includes("OWNER")) {
    var msg = {
  body: "┏━━━━━┓\n     𝗦𝗛𝗔𝗔𝗡-𝗞𝗛𝗔𝗡              ✧═•❁𝗪𝗘𝗟𝗖𝗢𝗠𝗘❁•═✧\n┗━━━━━┛\n\n\n OWNER SHAAN KHAN",
        attachment: fs.createReadStream(__dirname + `/ARIF-BABU/1732173951622.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
