import {Vote} from "../interfaces/Vote";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectVoteByVoteRestaurantId(voteId: string) : Promise<Vote|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(voteRestaurantId) AS voteRestaurantId, BIN_TO_UUID (:voteRestaurantId) AS voteRestaurntId from vote WHERE voteRestaurantId = UUID_TO_BIN(:voteRestaurantId)"
        const result = await mySqlConnection.execute(mySqlQuery, {voteId}) as RowDataPacket[]
        const vote : Array<Vote> = result[0] as Array<Vote>
        return vote.length === 1 ? {...vote[0]} : null
    } catch (error) {
        throw error
    }
}
