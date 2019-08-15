import { RECEIVE_POSTS } from '../actions/posts.actions'

export default function posts(state = {}, action: any){

    switch(action.type){
        case RECEIVE_POSTS:
            return {
                ...state,
                ...action.posts
            }

        default: 
         return state    
           
    }
}