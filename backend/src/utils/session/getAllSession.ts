import {Session} from "../interfaces/Session";
import {connect} from "../database.utils";
import {RowDataPacket,} from "mysql2"

export async function selectAllTweets() : Promise<Session[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(sessionId) AS sessionId, BIN_TO_UUID (sessionProfileId) AS sessionProfileId, sessionSocketId (SELECT COUNT(*) FROM `session` WHERE session.sessionId = session.likeTweetId) AS sessionCount FROM status INNER JOIN session ON session.sessionId = session.sessionProfileId ORDER BY sessionDate DESC'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Session>
    } catch (error) {
        throw error
    }
}