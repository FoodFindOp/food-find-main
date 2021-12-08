import {connect} from "../database.utils";
import {Vote} from "../interfaces/Vote";

export async function selectVoteByPrimaryKey(voteProfileId: string, voteSessionId: string, voteRestaurantId: string) {
    try {
        const mySqlConnection  = await connect()
        const mySqlQuery = "SELECT voteProfileId, voteRestaurantId, voteSessionId, voteLiked FROM vote WHERE voteProfileId = UUID_TO_BIN(:voteProfileId) AND voteRestaurantId = UUID_TO_BIN(:voteRestaurantId) AND voteSessionId = UUID_TO_BIN(:voteSessionId)";
        const [rows] = await mySqlConnection.execute(mySqlQuery, {voteProfileId, voteSessionId, voteRestaurantId})
        await mySqlConnection.end()
        console.log(rows)
        return rows
    } catch (error) {
        console.log(error)
        throw error
    }
}
