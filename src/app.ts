process.env.TZ = "GMT"

import { Command, TriggerResult } from "./command";
import { HelloCommand } from "./helloCommand";
import { Client } from "discord.js"
import { NarasiCommand } from "./narasiCommand";
import { YuzzuCommand } from "./yuzzuCommand";
import {VeziraCommand} from "./veziraCommand";

var helloResponses = require('../helloResponses.json')
var auth
var commands = new Array<Command>()
try {
    auth = require('../auth.json')
} catch (e) {
    auth = {
        token: process.env.discordToken
    }
}

var client = new Client()

client.on('ready', () => {
    console.info('Connected')
    console.info('Logged in as: ')
    console.info(`${client.user.username} - (${client.user.id})`)
})

client.on('message', message => {
    var results = new Array<TriggerResult>()

    commands.forEach(currentCommand => {
        if (currentCommand.recognise(message.content))
            results.push({
                command: currentCommand,
                data: currentCommand.trigger(message)
            })
    })

    commands.forEach(currentCommand => {
        if (currentCommand.recognise(message.content))
            currentCommand.postTrigger(message, results)
    })
})

//make sure to push new commands!
commands.push(new HelloCommand())
commands.push(new NarasiCommand())
commands.push(new YuzzuCommand())
commands.push(new VeziraCommand)

client.login(auth.token)