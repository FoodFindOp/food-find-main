import {connect} from "../database.utils";
import {Vote} from "../interfaces/Vote";

export async function insertVote(vote: Vote) : Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query: string = 'INSERT INTO vote(voteProfileId, voteRestaurantId, voteSessionId, voteLiked) VALUES (:voteProfileId, :voteRestaurantId, :voteSessionId, :voteLiked)';
        await mysqlConnection.execute(query, vote);
        return 'Voting Successfully Started'
    } catch (error) {
        throw error
    }
}
