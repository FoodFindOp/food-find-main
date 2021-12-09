import {Vote} from "../interfaces/Vote";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectVoteByProfileId(profileId: string) : Promise<Vote|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(voteProfileId) AS voteProfileId FROM vote WHERE voteProfileId = UUID_TO_BIN(:profileId)"
        const result = await mySqlConnection.execute(mySqlQuery, {profileId}) as RowDataPacket[]
        const vote : Array<Vote> = result[0] as Array<Vote>
        return vote.length === 1 ? {...vote[0]} : null
    } catch (error) {
        throw error
    }
}
