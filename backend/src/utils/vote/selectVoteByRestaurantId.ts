import {Vote} from "../interfaces/Vote";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectVoteByRestaurantId(restaurantId: string) {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(voteRestaurantId) AS voteRestaurantId from vote WHERE voteRestaurantId = UUID_TO_BIN(:restaurantId)"
        const result = await mySqlConnection.execute(mySqlQuery, {restaurantId}) as RowDataPacket[]
        // await mySqlConnection.end()
        // return result;
        const vote : Array<Vote> = result[0] as Array<Vote>
        console.log(vote)
        return vote.length === 1 ? {...vote[0]} : null
    } catch (error) {
        throw error
    }
}
