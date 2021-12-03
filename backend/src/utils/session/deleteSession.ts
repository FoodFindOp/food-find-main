import {connect} from "../database.utils";
import {Session} from "../interfaces/Session";

export async function deleteSession(like: Session) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `session` WHERE sessionId = UUID_TO_BIN(:sessionProfileId) AND sessionId = UUID_TO_BIN(:sessionId)'
        const [result] = await mySqlConnection.execute(mySqlDelete, like)
        return "Session successfully deleted"
    } catch(error) {
        throw error
    }
}