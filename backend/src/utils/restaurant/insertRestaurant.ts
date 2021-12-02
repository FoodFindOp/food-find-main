import {connect} from "../database.utils";
import {Restaurant} from "../interfaces/Restaurant";

export async function insertRestaurant(restaurant: Restaurant) : Promise<string>{
    try{
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO restaurant(restaurantId, restaurantAddress, restaurantImage, restaurantLatitude, restaurantLongitude, restaurantName, restaurantPhone, restaurantStarRating) VALUES (UUID_TO_BIN(:restaurantId), :restaurantAddress, :restaurantImage, :restaurantLatitude, :restaurantLongitude, :restaurantName, :restaurantPhone, :restaurantStarRating)';
        await mysqlConnection.execute(query, restaurant);
        return 'Restaurant Successfully Inserted'
    } catch (error) {
        throw error
    }
}