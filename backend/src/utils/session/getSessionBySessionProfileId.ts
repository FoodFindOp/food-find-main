import {Session} from "../interfaces/Session";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectSessionBySessionProfileId(sessionProfileId: string) : Promise<Session[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(sessionId) AS sessionId, BIN_TO_UUID (sessionProfileId) AS sessionProfileId, sessionSocketId from `session` WHERE  = UUID_TO_BIN(:sessionProfileId)"
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {sessionProfileId})
        return result[0] as Session[]
    } catch (error) {
        throw error
    }
}