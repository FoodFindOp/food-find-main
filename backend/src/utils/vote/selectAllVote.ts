import {Vote} from "../interfaces/Vote";
import {connect} from "../database.utils";
import {RowDataPacket,} from "mysql2"

export async function selectAllVote() : Promise<Vote[]> {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = 'SELECT BIN_TO_UUID(voteProfileId) AS voteProfileId, BIN_TO_UUID (voteRestaurantId) AS voteRestaurantId, BIN_TO_UUID(voteSessionId) AS voteSessionId, voteLiked FROM vote '
		const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
		return result[0] as Array<Vote>
	} catch (error) {
		throw error
	}
}
