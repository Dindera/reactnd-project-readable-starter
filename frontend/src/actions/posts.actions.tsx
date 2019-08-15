
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
// export const GET_POST = 'GET_POST'
// export const VOTE_POST = 'VOTE_POST'
// export const EDIT_POST = 'EDIT_POST'
// export const DELETE_POST = 'DELETE_POST'

export function receivePosts(posts: any) {

    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function addPost(post: any) {

    return {
        type: ADD_POST,
        post
    }
}