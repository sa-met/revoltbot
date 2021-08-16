const Revolt = require('revolt.js');
const util = require("util");

module.exports = {
  name: "eval",
  aliases: [],
  description: "",
  run: async (message, args, client) => {
  if(message.author_id === "01FD0D4VABDMB9HTX1TPNXA8MR" || message.author_id === "01FCXFBQPYCBZWX40NSBYXYAWW") {
    const input = args.join(' ')
    const { channel } = message;
     if(!input) return channel.sendMessage("Bir kod girin.");
      try {
        let result = util.inspect(eval(input),{ depth: 0 });
        channel.sendMessage("```js \n"+result+"\n```")
      } catch (error) {
        channel.sendMessage(`\`\`\`js\n${error}\n\`\`\``)
      }
    } else {
      message.channel.sendMessage("No");
    }
  }
}