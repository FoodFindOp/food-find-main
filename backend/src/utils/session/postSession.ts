import {Session} from "../interfaces/Session";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertSession(tweet: Session) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO session(sessionId, sessionId) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:sessionId), :sessionContent, NOW())";

        const [result]= await mySqlConnection.execute(mySqlQuery, Session) as [ResultSetHeader, RowDataPacket]
        return "Session created successfully"
    } catch (error) {
        throw error
    }
}