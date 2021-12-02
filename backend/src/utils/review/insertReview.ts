import {connect} from "../database.utils";
import {Review} from "../interfaces/Review";

export async function insertReview(review: Review) : Promise<string>{
    try{
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO review(reviewId, reviewRestaurantId, reviewStarRating, reviewText) VALUES (UUID_TO_BIN(:reviewId), UUID_TO_BIN(:reviewRestaurantId), :reviewStarRating, :reviewText)';
        await mysqlConnection.execute(query, review);
        return 'Review Successfully Inserted'
    } catch (error) {
        throw error
    }
}