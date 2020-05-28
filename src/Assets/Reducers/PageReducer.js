import {SELECT_PAGE} from "../Actions/Actions"

//4. reducers
const defaultState = 1;
export default function PageReducer(state = defaultState, action){
    switch(action.type) {
        case SELECT_PAGE: {
            console.log('action.payload', action.payload)
            console.log("state",state)
            state = action.payload 
            return state
        }       
        default:
            return state
    }
}