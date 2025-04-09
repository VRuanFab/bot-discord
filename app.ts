import { REST, Routes } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config({ path:'./.env' })


const commands = [
    {
        name: 'bang',
        description: 'replies'
    }
]

const rest = new REST({ version: '10' }).setToken(`${process.env.BOT_TOKEN}` /* CLIENT SECRET */);

try {
    console.log('start (/)');

    rest.put(Routes.applicationCommands(`${process.env.CLIENT_ID}` /* CLIENT_ID */), {body: commands})
}
catch (err){
    console.error(err)
}


import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.ClientReady, readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'bang') {
    await interaction.reply('Pong!');
  }
});

client.login(`${process.env.BOT_TOKEN}`);