const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    // List connected Servers
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels

      //  guild.channels.forEach((channel) => {
    //         console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
    //       })

    })
      // Send hello world message
//      var generalChannel = client.channels.get("489776941486833664") // Replace with known channel ID
//      generalChannel.send("Hello, world!")
})

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

        receivedMessage.channel.send("Message received from " + receivedMessage.author.toString()
        + ": " + receivedMessage.content)
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NDg5Nzc3MDA4ODI2NjQ2NTI4.Dn0ydQ.NEeksLPVgMCGQ8Ln5HxRn0fex7Q"

client.login(bot_secret_token)
