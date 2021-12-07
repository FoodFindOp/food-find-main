import {Restaurant} from "../interfaces/Restaurant";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectRestaurantByRestaurantId(restaurantId: string) : Promise<Restaurant|null> {
    try {
        console.log(restaurantId)
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(restaurantId) AS restaurantId,  restaurantAddress, restaurantImage, restaurantLatitude, restaurantLongitude, restaurantName, restaurantPhone, restaurantStarRating from restaurant WHERE restaurantId = UUID_TO_BIN(:restaurantId)"
        const result = await mySqlConnection.execute(mySqlQuery, {restaurantId}) as RowDataPacket[]
        const restaurants : Array<Restaurant> = result[0] as Array<Restaurant>
        return restaurants.length === 1 ? {...restaurants[0]} : null;
    } catch (error) {
        console.error(error)
        throw error
    }
}