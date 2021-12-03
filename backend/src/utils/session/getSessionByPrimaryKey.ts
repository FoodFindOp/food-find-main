import {connect} from "../database.utils";
import {Session} from "../interfaces/Session";
import {RowDataPacket} from 'mysql2';

export async function getSessionByPrimaryKey(sessionId: string): Promise<Session|null>  {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = 'SELECT BIN_TO_UUID(sessionId) as sessionId, sessionProfileId, sessionSocketId, FROM session WHERE sessionId = UUID_TO_BIN(:sessionId)'
        const result = await mysqlConnection.execute(sqlQuery, {sessionId}) as RowDataPacket[]
        const rows: Session[]  = result[0] as Session[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}