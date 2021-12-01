import axios from "axios"
import {connect} from "./database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';
import {Restaurant} from "./interfaces/Restaurant";
import {Review} from "./interfaces/Review";

import {v4 as uuid} from "uuid";



function dataDownloader() : Promise<any> {
    return main()
    async function main() {
        try {
            await downloadRestaurant()

        } catch (e:any) {
            console.error(e.message)
        }
    }

    async function downloadRestaurant() {
        try {
            const reply = await axios.get('https://api.yelp.com/v3/businesses/search',
            {
               params:{ location:"79109" },
                    headers: {'Authorization': `Bearer ${process.env.YELP_API}`}})

            console.log(reply.data.businesses)
            for (let yelpRestaurant of reply.data.businesses) {
                // console.log(yelpRestaurant["is_closed"])
                const restaurant :Restaurant = {
                    restaurantId: uuid(),
                    restaurantAddress: yelpRestaurant.location['display_address'],
                    restaurantImage: yelpRestaurant['image_url'],
                    restaurantLatitude: yelpRestaurant.coordinates['latitude'],
                    restaurantLongitude: yelpRestaurant.coordinates['longitude'],
                    restaurantName: yelpRestaurant['name'],
                    restaurantPhone: yelpRestaurant['display_phone'],
                    restaurantStarRating: yelpRestaurant['rating']
                }
                console.log(restaurant)
            }

        } catch (error) {
            throw error
        }
    }
    // async function downloadReview() {
    //     try {
    //         const reply = await axios.get('https://api.yelp.com/v3/businesses/f5d5cfe8-d2bb-462d-a4d4-00fd07cea7c9/reviews',
    //             {headers: {'Authorization': `Bearer ${process.env.YELP_API}`}})
    //         for (let yelpRestaurant of reply.data.businesses) {
    //             console.log(reply.data.businesses)
    //         }
    //
    //     } catch (error) {
    //         throw error
    //     }
    // }
}

dataDownloader().catch(error => console.error(error))
