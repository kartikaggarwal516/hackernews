import React from 'react'
import page from './PageReducer'
import upvotearr from "./UpvoteReducer"
import { combineReducers } from 'redux'


export default combineReducers({
    page: page,
    upvotearr:upvotearr
})
