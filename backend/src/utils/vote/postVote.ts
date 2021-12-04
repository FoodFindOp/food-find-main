import {Vote} from "../interfaces/Vote";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertTweet(vote: Vote) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO vote(:voteProfileIdId, :voteLiked ) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:voteProfileId), :voteContent, NOW())";

        const [result]= await mySqlConnection.execute(mySqlQuery, vote) as [ResultSetHeader, RowDataPacket]
        return "Vote created successfully"
    } catch (error) {
        throw error
    }
}
