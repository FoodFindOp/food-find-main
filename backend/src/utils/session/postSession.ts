import {Session} from "../interfaces/Session";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertTweet(tweet: Session) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO tweet(tweetId, tweetProfileId, tweetContent, tweetDate ) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:tweetProfileId), :tweetContent, NOW())";

        const [result]= await mySqlConnection.execute(mySqlQuery, tweet) as [ResultSetHeader, RowDataPacket]
        return "Session created successfully"
    } catch (error) {
        throw error
    }
}