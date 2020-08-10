const Discord = require("discord.js");
const TOKEN = process.env.DISCORD_BOT_TOKEN;

const client = new Discord.Client({

});

client.on("ready", () => {
    console.log("Ret2go");
});

client.on("message", (message) => {
    console.log("New message:", message);
});

client.on("guildCreate", (guild) => {
    console.log("New guild:", guild);
});

client.login(TOKEN);
