import { Command, TriggerResult } from "./command";
import { Message } from "discord.js";

export class YuzzuCommand extends Command {
    constructor(){
        super()
    }
    trigger(message: Message) {
        var time = new Date()
        if (message.member.user.tag === "Yuzzu Uzzzu#3583" && time.getHours() > 16 && time.getHours() < 22) {
            message.react("💤")
        }
    }
}