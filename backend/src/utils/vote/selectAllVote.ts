import {Vote} from "../interfaces/Vote";
import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {Status} from "../interfaces/Status";
import {RowDataPacket,} from "mysql2"

export async function selectAllVote() : Promise<Vote[]> {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = 'SELECT BIN_TO_UUID(voteId) AS voteId, BIN_TO_UUID (voteProfileId) AS voteProfileId, voteContent, voteDate, profile.profileAtHandle, profile.profileAvatarUrl, (SELECT COUNT(*) FROM `like` WHERE vote.voteId = like.likeVoteId) AS likeCount FROM vote INNER JOIN profile ON profile.profileId = vote.voteProfileId ORDER BY voteDate DESC'
		const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
		return result[0] as Array<Vote>
	} catch (error) {
		throw error
	}
}
