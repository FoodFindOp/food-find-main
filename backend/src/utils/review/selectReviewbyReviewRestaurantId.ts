import {Review} from "../interfaces/Review";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectReviewByReviewRestaurantId(reviewRestaurantId: string) : Promise<Review[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(reviewId) AS reviewId, BIN_TO_UUID(reviewRestaurantId) AS reviewRestaurantId, reviewStarRating, reviewText FROM review WHERE reviewRestaurantId = UUID_TO_BIN(:reviewRestaurantId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {reviewRestaurantId})
        return result[0] as Review[]
    } catch (error) {
        console.log(error)
        throw error
    }
}