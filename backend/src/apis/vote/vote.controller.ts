import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllVote} from "../../utils/vote/selectAllVote";
import {selectVoteByVoteProfileId } from "../../utils/vote/selectVoteByVoteProfileId";
import {selectVoteByVoteRestaurantId} from "../../utils/vote/selectVoteByVoteRestaurantId";
import {selectVoteByVoteSessionId} from "../../utils/vote/selectVoteByVoteSessionId";
import {selectVoteByPrimaryKey} from "../../utils/vote/selectVoteByPrimaryKey";

export async function getAllVoteController(request: Request, response: Response){
    try {
        const data = await selectAllVote()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

export async function getVoteByPrimaryKey(request: Request, response: Response)
    try {
        const data = await selectVoteByPrimaryKey()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

export async function getVoteByVoteProfileId(request: Request, response: Response): Promise<Response | void>{
    try{
        const {profileId} = request.params;
        const data = await selectVoteByVoteProfileId(profileId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

export async function getVoteByVoteRestaurantId(request: Request, response: Response) {
    try{
        const {restaurantId} = request.params;
        const data = await selectVoteByVoteRestaurantId(restaurantId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

export async function getVoteByVoteSessionId(request: Request, response: Response) {
    try{
        const {sessionId} = request.params;
        const data = await selectVoteByVoteSessionId(sessionId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

