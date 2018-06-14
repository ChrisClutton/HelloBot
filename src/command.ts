import { Message } from "discord.js"

export abstract class Command {

    protected pattern: RegExp

    constructor(pattern?: string|RegExp) {
        if (typeof pattern === "string") {
            this.pattern = new RegExp(pattern)
        }
        else if (pattern instanceof RegExp) {
            this.pattern = pattern
        }
    }

    recognise(message: string) : boolean {
        if (!this.pattern) return true
        return this.pattern.test(message)
    }

    trigger(message: Message) : any { }
    postTrigger(message: Message, triggerResults: Array<TriggerResult>) : void { }
}

export interface TriggerResult {
    command: Command
    data?: any
} 