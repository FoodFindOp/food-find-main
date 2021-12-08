import {Vote} from "../interfaces/Vote";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';


export async function selectVoteBySessionId(sessionId: string) : Promise<Vote[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(voteSessionId) AS voteSessionId FROM vote WHERE voteSessionId = UUID_TO_BIN(:sessionId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {sessionId})
        return result[0] as Vote[]
    } catch (error) {
        throw error
    }
}
