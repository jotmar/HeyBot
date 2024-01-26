require('dotenv').config()
const { REST, Routes } = require('discord.js')

const commands = [
  {
    name: 'pong',
    description: 'Replies with ping!'
  }
]

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN)

async function Update() {
  try {
    console.log('Started to update (/) commands')
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands
    })
    console.log('Successfully update de application (/) commands')
  } catch (error) {
    console.log(`We had an error: ${error}`)
  }
}

Update()
