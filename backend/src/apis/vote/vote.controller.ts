import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectAllVote} from "../../utils/vote/selectAllVote";
import {selectVoteByProfileId } from "../../utils/vote/selectVoteByProfileId";
import {selectVoteByRestaurantId} from "../../utils/vote/selectVoteByRestaurantId";
import {selectVoteBySessionId} from "../../utils/vote/selectVoteBySessionId";
import {selectVoteByPrimaryKey} from "../../utils/vote/selectVoteByPrimaryKey";
import {insertVote} from "../../utils/vote/insertVote";
import {selectSessionBySessionId} from "../../utils/session/selectSessionBySessionId";
import {Vote} from "../../utils/interfaces/Vote";
import {Profile} from "../../utils/interfaces/Profile";

export async function getAllVoteController(request: Request, response: Response) {
    try {
        const data = await selectAllVote()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

export async function getVoteByPrimaryKey(request: Request, response: Response) {
    try {
        const {voteProfileId, voteSessionId, voteRestaurantId} = request.params;
        const data = await selectVoteByPrimaryKey(voteProfileId, voteSessionId, voteRestaurantId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

export async function getVoteByProfileId(request: Request, response: Response): Promise<Response | void>{
    try{
        const {profileId} = request.params;
        const data = await selectVoteByProfileId(profileId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

export async function getVoteByRestaurantId(request: Request, response: Response) {
    try{
        const {restaurantId} = request.params;
        const data = await selectVoteByRestaurantId(restaurantId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

export async function getVoteBySessionId(request: Request, response: Response) {
    try{
        const {sessionId} = request.params;
        const data = await selectVoteBySessionId(sessionId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

export async function postVote(request: Request, response: Response) {
    try{
        const {voteSessionId, voteRestaurantId, voteLiked} = request.body
        // const {sessionId} = request.params;
        // const session = await selectSessionBySessionId(sessionId)
        // console.log(session)
        const profile : Profile = request.session.profile as Profile
        const voteProfileId : string = <string>profile.profileId
        const vote: Vote = {
            voteSessionId,
            // @ts-ignore
            voteProfileId,
            voteRestaurantId,
            voteLiked
        }
        console.log(vote)
        const data = await insertVote(vote)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error){
        console.log(error);
    }
}

