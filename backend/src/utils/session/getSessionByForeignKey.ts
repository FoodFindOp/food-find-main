import {Session} from "../interfaces/Session";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectSessionBySessionId(SessionProfileId: string) : Promise<Session[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(sessionId) AS sessionId, BIN_TO_UUID (sessionProfileId) AS sessionProfileId, sessionSocketId, (SELECT COUNT(*) FROM `session` WHERE session.sessionId = like.sessionId) AS sessionCount FROM session INNER JOIN session ON session.sessioneId = session.sessionProfileId WHERE sessionProfileId = UUID_TO_BIN(:sessionProfileId) ORDER BY sessionDate DESC'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {sessionId})
        return result[0] as Session[]
    } catch (error) {
        throw error
    }
}