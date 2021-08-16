const fs = require('fs');
const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
this.commands = []
for (const file of commands) {
    console.log(`commands load ${file}`);
    const command = require(`../commands/${file}`);
    this.commands.push(command)
};

//odule.exports.commands = [];