import {Session} from "../interfaces/Session";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";

export async function selectSessionBySocketId(sessionSocketId: string) : Promise<Session|null> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(sessionId) AS sessionId, BIN_TO_UUID(sessionProfileId) AS sessionProfileId, sessionSocketId FROM `session` WHERE sessionSocketId = :sessionSocketId'
        const result = await mySqlConnection.execute(mySqlQuery, {sessionSocketId}) as RowDataPacket[]
        const sessions: Session[] = result[0] as Session[]
        return sessions.length === 1 ? {...sessions[0]} : null
    } catch (error) {
        throw error
    }
}