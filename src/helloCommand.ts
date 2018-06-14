import { Command } from "./command";
import { Message } from "discord.js";
const responses = require("../helloResponses.json")

export class HelloCommand extends Command {
    constructor(){
        super(/^!((hello)|(hi)|(hey))/i)
    }
    trigger(message: Message) {
        var response = responses[Math.floor(Math.random()*responses.length)]
        message.channel.send(response)

        return response
    }
}