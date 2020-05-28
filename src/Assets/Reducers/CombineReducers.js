import React from 'react'
import page from './PageReducer'
import { combineReducers } from 'redux'


export default combineReducers({
    page: page
})
