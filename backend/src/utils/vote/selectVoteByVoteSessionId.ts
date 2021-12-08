import {Vote} from "../interfaces/Vote";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';


export async function selectVoteByVoteSessionId(voteSessionId: string) : Promise<Vote[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(voteProfileId), BIN_TO_UUID(voteRestaurantId), BIN_TO_UUID(voteSessionId), voteLiked FROM vote WHERE voteSessionId = UUID_TO_BIN(:voteSessionId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {voteSessionId})
        return result[0] as Vote[]
    } catch (error) {
        throw error
    }
}
