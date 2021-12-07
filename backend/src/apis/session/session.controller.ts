import {Status} from "../../utils/interfaces/Status";
import {Request, Response} from "express";
import {deleteSession} from "../../utils/session/deleteSession";
import {selectAllSession} from "../../utils/session/getAllSession";
import {selectSessionBySessionId} from "../../utils/session/selectSessionBySessionId";
import {insertSession} from "../../utils/session/insertSession";
import {putSession} from "../../utils/session/putSession";


export async function postSession(request: Request, response: Response) : Promise<Response<Status>> {

}