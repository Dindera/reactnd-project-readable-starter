import { combineReducers } from 'redux'
import posts from './posts.reducer'
import category from  './category.reducer'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    posts,
    category,
    loadingBarReducer
})