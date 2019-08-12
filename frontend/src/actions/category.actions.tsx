

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'


export function receiveCategories(categories: any){

    return{
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export function receiveCategory(category: any){
    return{
        type: RECEIVE_CATEGORY,
        category
    }
}