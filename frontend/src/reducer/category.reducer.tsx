import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category.actions'

export default function category(state={}, action: any){

    switch(action.type){
     case RECEIVE_CATEGORIES : 
        return {
            ...state, 
            ...action.categories
        }
     default: 
      return state 
    }
}