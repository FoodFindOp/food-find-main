import {connect} from "../database.utils";

export async function selectRandomRestaurant() {
    try {
        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(restaurantId) AS restaurantId, restaurantAddress, restaurantImage, restaurantLatitude, restaurantLongitude, restaurantName, restaurantPhone, restaurantStarRating FROM restaurant ORDER BY RAND() LIMIT 15');
        await mysqlConnection.end();
        return rows;
    } catch (error) {
        throw error
    }
}