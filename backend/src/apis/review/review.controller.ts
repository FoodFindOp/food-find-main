import {Request, Response} from 'express';

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {selectReviewByReviewId} from '../../utils/review/selectReviewByReviewId';

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