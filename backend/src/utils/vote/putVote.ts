import {connect} from "../database.utils";
import {Vote} from "../interfaces/Vote";

export async function putVote(session: Vote) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO vote(:voteId, :voteProfileId) VALUES (UUID_TO_BIN(UUID()) , :voteId, :voteProfileId)';
        await mysqlConnection.execute(query);
        return 'Vote Successfully Created'
    } catch (error) {
        throw error
    }
}
