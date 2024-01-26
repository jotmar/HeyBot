const { Client, IntentsBitField } = require('discord.js')
require('dotenv').config()

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})

client.on('ready', c => {
  console.log(`${c.user.username} is online!`)
})

client.on('messageCreate', msg => {
  if (msg.author.bot) {
    return
  }
  if (msg.content.includes('Davi_black')) {
    msg.reply('Um corno foi detectado')
  }
})

client.login(process.env.DISCORD_TOKEN)
