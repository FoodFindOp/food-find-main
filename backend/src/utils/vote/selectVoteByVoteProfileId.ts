import {Vote} from "../interfaces/Vote";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectVoteByVoteProfileId(voteId: string) : Promise<Vote|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(voteProfileId) AS voteProfileId, BIN_TO_UUID (:voteProfileId) AS voteProfileId from vote WHERE voteProfileId = UUID_TO_BIN(:voteProfileId)"
        const result = await mySqlConnection.execute(mySqlQuery, {voteId}) as RowDataPacket[]
        const vote : Array<Vote> = result[0] as Array<Vote>
        return vote.length === 1 ? {...vote[0]} : null
    } catch (error) {
        throw error
    }
}
