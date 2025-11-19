const { Client, IntentsBitField } = require("discord.js")
const { config } = require("dotenv")

config()

const krit = new Client({
    intents: [
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessages
    ]
})

krit.login(process.env.TokenKRIT)