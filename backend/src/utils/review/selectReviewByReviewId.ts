import {Review} from "../interfaces/Review";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectReviewByReviewId(reviewId: string) : Promise<Review|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(reviewId) AS reviewId, BIN_TO_UUID (reviewRestaurantId) AS reviewRestaurantId, reviewStarRating, reviewText from review WHERE reviewId = UUID_TO_BIN(:reviewId)"
        const result = await mySqlConnection.execute(mySqlQuery, {reviewId}) as RowDataPacket[]
        const reviews : Array<Review> = result[0] as Array<Review>
        return reviews.length === 1 ? {...reviews[0]} : null;
    } catch (error) {
        throw error
    }
}