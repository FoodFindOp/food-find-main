import {Status} from "../../utils/interfaces/Status";
import {Request, Response} from "express";
import {selectAllSession} from "../../utils/session/getAllSession";
import {selectSessionBySessionId} from "../../utils/session/selectSessionBySessionId";
import {selectSessionBySessionProfileId} from "../../utils/session/getSessionBySessionProfileId";
import {Profile} from "../../utils/interfaces/Profile";
import {insertSession} from "../../utils/session/insertSession";
import {selectSessionBySocketId} from "../../utils/session/selectSessionBySocketId";



export async function getSessionBySessionId(request: Request, response: Response) : Promise<Response> {
    try {
        const {sessionId} = request.params;
        const mySqlResult = await selectSessionBySessionId(sessionId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

export async function getAllSession(request: Request, response: Response) : Promise<Response> {
    try {
        const mySqlResult = await selectAllSession();
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

export async function postSession(request: Request, response: Response) :
    Promise<Response> {
        try {
            const profile : Profile = request.session.profile as Profile
            const sessionProfileId : string = <string>profile.profileId
            const sessionSocketId = request.body.sessionId
            const session = {sessionId: request.body.sessionId, sessionProfileId, sessionSocketId}
            const mySqlResult = await insertSession(session);
            const data = mySqlResult ?? null
            const status: Status = {status: 200, data, message:null}
            return response.json(status)

        } catch (error: any) {
            return(response.json({status: 400, data: null, message: error.message}))

        }

}

export async function getSessionBySessionProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const profile : Profile = request.session.profile as Profile
        const profileId : string = <string>profile.profileId
        const mySqlResult = await selectSessionBySessionProfileId(profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}


export async function getSessionBySessionSocketId(request: Request, response: Response) : Promise<Response> {
    try {
        const {sessionSocketId} = request.params;
        console.log(sessionSocketId)
        const mySqlResult = await selectSessionBySocketId(sessionSocketId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}