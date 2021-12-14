import express, { Application, Errback, ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
// Routes
import server, {Server as Http} from 'http';
import {Server} from 'socket.io'
import { indexRoute } from './apis/index.route'
import {SignInRouter} from "./apis/sign-in/sign-in.route";
import SignupRoute from './apis/sign-up/sign-up.route';
import {SignOutRoute} from "./apis/sign-out/sign-out.route";
import {SessionRouter} from "./apis/session/session.route";
import {ProfileRoute} from "./apis/profile/profile.route";
import RestaurantRouter from "./apis/restaurant/restaurant.route";
import ReviewRouter from "./apis/review/review.route";
import {VoteRoute} from "./apis/vote/vote.route";
const session = require('express-session')
const MemoryStore = require('memorystore')(session);


// The following class creates the app and instantiates the server
export class App {
    app: Application;
    io: Server
    http: Http

    constructor (
        private port?: number | string
    ) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
        this.http = server.createServer(this.app)

        this.io = new Server(this.http, { path: "/socket", cors: { origin: "*" }, 'transports': ['websocket', 'polling'] })

    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings () : void {
        this.app.set('port', this.port || process.env.PORT || 4200)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares () :void {
        const sessionConfig = {
            store: new MemoryStore({
                checkPeriod: 100800
            }),
            secret:"secret",
            saveUninitialized: true,
            resave: true,
            maxAge: "3h"
        }
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(session(sessionConfig));
        this.app.use("*", (request, response, next) => {
            request.io = this.io as Server;
            return next();
        })
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes () :void {
        // TODO add "/apis"
        this.app.use('/apis', indexRoute);
        this.app.use('/apis/sign-up', SignupRoute);
        this.app.use('/apis/sign-in', SignInRouter);
        this.app.use('/apis/sign-out', SignOutRoute);

        this.app.use('/apis/session', SessionRouter);
        this.app.use('/apis/profile', ProfileRoute);
        this.app.use('/apis/restaurant', RestaurantRouter);
        this.app.use('/apis/review', ReviewRouter);

        this.app.use('/apis/vote', VoteRoute);

    }
    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen (): Promise<void> {



        this.http.listen(8080, () => {console.log("Express application successfully built")})
    }
}



