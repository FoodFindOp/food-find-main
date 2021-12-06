import {connect} from "../database.utils";

export async function selectSessionBySessionId(sessionId: string)
{
    try {
        const mysqlConnection = await connect();
        const query: string = 'SELECT BIN_TO_UUID(sessionId) as sessionId, sessionProfileId, sessionSocketId FROM `session` WHERE sessionId = UUID_TO_BIN(:sessionId)';
        const [rows] = await mysqlConnection.execute(query, {sessionId:sessionId});
        await mysqlConnection.end();
        return rows;
    } catch (error) {
        throw error
    }
}