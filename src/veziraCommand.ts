import { Command, TriggerResult } from "./command";
import { Message } from "discord.js";

export class VeziraCommand extends Command {
    constructor(){
        super()
    }
    trigger(message: Message) {
        if (message.member.user.tag === "Raz#4231" && Math.random() > 0.9) {
            message.react("👌")
        }
    }
}