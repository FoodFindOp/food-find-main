import {connect} from "../database.utils";
import {Session} from "../interfaces/Session";

export async function insertSession(session: Session) : Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO session(sessionId, sessionProfileId, sessionSocketId) VALUES (UUID_TO_BIN(:sessionId), UUID_TO_BIN(:sessionProfileId), :sessionSocketId)';
        await mysqlConnection.execute(query, session);
        return 'Session Successfully Started'

    } catch (error) {
    throw error
    }
}
