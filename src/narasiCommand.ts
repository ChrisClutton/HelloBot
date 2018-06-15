import { Command, TriggerResult } from "./command";
import { Message } from "discord.js";

export class NarasiCommand extends Command {
    constructor(){
        super()
    }
    trigger(message: Message) {
        if (message.member.user.tag === "Narasi#2418" && Math.random() > 0.8) {
            message.react("🤔")
        }
    }
}