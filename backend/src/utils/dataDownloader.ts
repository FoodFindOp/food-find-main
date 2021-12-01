import axios from "axios"
import {connect} from "./database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';
import {Restaurant} from "./interfaces/Restaurant";
import {PartialReview, Review} from "./interfaces/Review";

import {v4 as uuid} from "uuid";
import {insertRestaurant} from "./restaurant/insertRestaurant";
import {insertReview} from "./review/insertReview";




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

            // console.log(reply.data.businesses)
            for (let yelpRestaurant of reply.data.businesses) {
                // console.log(yelpRestaurant["is_closed"])
                const restaurant :Restaurant = {
                    restaurantId: uuid(),
                    restaurantAddress: yelpRestaurant.location['display_address'].join(", "),
                    restaurantImage: yelpRestaurant['image_url'],
                    restaurantLatitude: yelpRestaurant.coordinates['latitude'],
                    restaurantLongitude: yelpRestaurant.coordinates['longitude'],
                    restaurantName: yelpRestaurant['name'],
                    restaurantPhone: yelpRestaurant['display_phone'],
                    restaurantStarRating: yelpRestaurant['rating']
                }
                console.log(restaurant)
                await insertRestaurant(restaurant)
                await downloadReview(yelpRestaurant['id'], restaurant.restaurantId as string)
            }

        } catch (error) {
            throw error
        }
    }
    async function downloadReview(yelpId:string, reviewRestaurantId:string) {
        try {
            const reply = await axios.get(`https://api.yelp.com/v3/businesses/${yelpId}/reviews`,
                {headers: {'Authorization': `Bearer ${process.env.YELP_API}`}})
            // console.log(reply.data.reviews)

            for (let yelpReview of reply.data.reviews) {
                const review :Review = {
                    reviewId: uuid(),
                    reviewRestaurantId,
                    reviewStarRating: yelpReview['rating'],
                    reviewText: yelpReview['text']
                }
                console.log(review)
                await insertReview(review)
            }

        } catch (error) {
            throw error
        }
    }
}

dataDownloader().catch(error => console.error(error))
