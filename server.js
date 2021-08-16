const { Client } = require("revolt.js");
const client = new Client();
const { commands } = require("./util/commands.js");
const fs = require("fs");
const { token, prefix } = require("./config.json");

client.on("ready", async () => {
  console.info(`Logged in as ${client.user.username}!`);
});

client.on("message", async message => {
  if (!message.content.startsWith(prefix)) return;
  let args = message.content.substr(prefix.length).split(" ");
  let commandName = args.shift();

  let command = commands.find(
    cmd => cmd.name === commandName || cmd.aliases.indexOf(commandName) > -1
  );
  if (!command) return;

  try {
    command.run(message, args, client);
  } catch (e) {
    await client.channel.sendMessage(`Error \n\`\`\`js\n${e}\`\`\``);
  } 
});

client.loginBot(token);