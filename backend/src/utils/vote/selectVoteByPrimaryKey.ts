import {connect} from "../database.utils";
import {Vote} from "../interfaces/Vote";

export async function selectVoteByPrimaryKey(vote: Vote) {
    try {
        const mySqlConnection  = await connect()
        const mySqlQuery = "SELECT voteProfileId, voteRestaurantId, voteSessionId FROM `vote` WHERE voteProfileId = UUID_TO_BIN(:voteProfileId) AND voteRestaurantId = UUID_TO_BIN(:voteRestaurantId) AND voteSessionId = UUID_TO_BIN(:voteSessionId)";
        const [rows] = await mySqlConnection.execute(mySqlQuery, vote)
        await mySqlConnection.end()
        console.log(rows)
        return rows
    } catch (error) {
        console.log(error)
        throw error
    }
}
