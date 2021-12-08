import {connect} from "../database.utils";
import {Session} from "../interfaces/Session";
import {RowDataPacket} from "mysql2";

export async function selectSessionBySessionId(sessionId: string)
{
    try {
        const mysqlConnection = await connect();
        const query: string = 'SELECT BIN_TO_UUID(sessionId) as sessionId, sessionProfileId, sessionSocketId FROM `session` WHERE sessionId = UUID_TO_BIN(:sessionId)';
        const result = await mysqlConnection.execute(query, {sessionId:sessionId})as RowDataPacket[];
        const sessions: Session[] = result[0] as Session[]
        return sessions.length === 1 ? {...sessions[0]} : null
    } catch (error) {
        throw error
    }
}