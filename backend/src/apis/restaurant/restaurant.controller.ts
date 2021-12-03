import {Request, Response} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {selectRestaurantByRestaurantId} from '../../utils/restaurant/selectRestaurantByRestaurantId';
import {selectRandomRestaurant} from "../../utils/restaurant/selectRandomRestaurant";
import exp from "constants";

export async function getRestaurantByRestaurantIdController(request : Request, response: Response) : Promise<Response<Status>>{
    try {
        const     {restaurantId} = request.params
        const data  = await selectRestaurantByRestaurantId(restaurantId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        console.log(error)
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function getRandomRestaurant(request : Request, response : Response) : Promise<Response|void>  {
    try {
        const data = await selectRandomRestaurant();
        const status : Status = {status:200, message: null, data}
        return response.json(status)
    } catch (error) {
        console.log(error)
    }
}