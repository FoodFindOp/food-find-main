import { App } from './App'
import {Profile} from "./utils/interfaces/Profile";
import {Request} from "express";
import {Server} from 'socket.io';



declare module 'express-session' {
    export interface SessionData {
        profile: Profile|undefined;
        signature: string|undefined;
        jwt: string|undefined
    }
}

declare module "express-serve-static-core" {
    export interface Request{
        io: Server
    }
}

// instantiate new app and pass it a port as an argument to start with (4200)
async function main () {
    try {
        const app = new App(4200)
        await app.listen()
    } catch (e) {
        console.log(e)
    }
}

main()