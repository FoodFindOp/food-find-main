import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {selectReviewByReviewId} from '../../utils/review/selectReviewByReviewId';
import {selectReviewByReviewRestaurantId} from "../../utils/review/selectReviewbyReviewRestaurantId";

export async function getReviewByReviewIdController(request : Request, response: Response) : Promise<Response<Status>>{
    try {
        const     {reviewId} = request.params
        const data  = await selectReviewByReviewId(reviewId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function getReviewByReviewRestaurantId(request : Request, response: Response) : Promise<Response<Status>>{
    try {
        const     {reviewRestaurantId} = request.params
        const data  = await selectReviewByReviewRestaurantId(reviewRestaurantId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}