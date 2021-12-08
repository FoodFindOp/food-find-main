import {Status} from "../../utils/interfaces/Status";
import {Request, Response} from "express";
import {selectAllSession} from "../../utils/session/getAllSession";
import {selectSessionBySessionId} from "../../utils/session/selectSessionBySessionId";
import {putSession} from "../../utils/session/putSession";


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
        const {sessionId} = request.params;
        const mySqlResult = await selectAllSession();
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

export async function insertSession(request: Request, response: Response) :
    Promise<Response> {
        try {
            const {sessionId} = request.params;
            const mySqlResult = await putSession(sessionId);
            const data = mySqlResult ?? null
            const status: Status = {status: 200, data, message:null}
            return response.json(status)

        } catch (error: any) {
            return(response.json({status: 400, data: null, message: error.message}))

        }

}