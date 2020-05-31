import {UPVOTE, UNVOTE} from "../Actions/Actions"

const defaultstate = []
export default function UpvoteReducer(state = defaultstate, actions)
{
    switch(actions.type){
        case UPVOTE: {
            state = [...state, actions.payload]
            return state
        }

        case UNVOTE: {
            state = state.filter( item => item!==actions.payload)
            return state
        }

        default : return state
    }
}