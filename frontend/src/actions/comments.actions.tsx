

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function recieveComments(comments: []){

    return {
        type: RECEIVE_COMMENTS,
        comments,
    }
}

export function addComment(comment: string){
    return{
        type: ADD_COMMENT,
        comment,
    }
}