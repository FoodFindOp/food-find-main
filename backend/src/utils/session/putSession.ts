import {connect} from "../database.utils";
import {Session} from "../interfaces/Session";

export async function insertSession(session: Session) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO session(sessionId, sessionProfileId, sessionSocketId) VALUES (UUID_TO_BIN(UUID()) , :sessionId, :sessionProfileId, :sessionSocketId)';
        await mysqlConnection.execute(query, session);
        return 'Session Successfully Created'
    } catch (error) {
        throw error
    }
}