import axios from "axios"
import {connect} from "./database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

interface restaurant {
    postId: string | null,
    restaurantId: string | null,
    restaurantAddress: string,
    restaurantImage: string,
    restaurantLatitude: string
    restaurantLongitude: string
    restaurantName: string
    restaurantPhone: string
    restaurantStarRating: string
}

function dataDownloader() : Promise<any> {
    return main()
    async function main() {
        try {
            await downloadRestaurant()

        } catch (e) {
            console.log(e)
        }
    }

    async function downloadRestaurant() {
        try {
            const restaurant = await axios.get("https://www.yelp.com/developers/documentation/v3/business_search")

            const mySqlConnection = await connect()
            const mySqlQuery = "INSERT INTO restaurant (restaurantId, restaurantAddress, restaurantImage, restaurantLatitude, restaurantLongitude, restaurantName, restaurantPhone, restaurantStarRating) VALUES (UUID_TO_BIN(UUID()), :restaurantAddress, :restaurantImage, :restaurantLatitude, :restaurantLongitude, :restaurantName, :restaurantPhone, :restaurantStarRating)"
                // Change this part.  Instead of putting the posts into an arrray insert them into the database.
                // See https://github.com/Deep-Dive-Coding-Fullstack-Licensing/example-capstone/blob/development/backend/utils/tweet/insertTweet.ts for example.
            const [result]= await mySqlConnection.execute(mySqlQuery, restaurant) as [ResultSetHeader, RowDataPacket]
            return "Tweet created successfully"
        } catch (error) {
            throw error
        }
    }
}

dataDownloader().catch(error => console.error(error))
