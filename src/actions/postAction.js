import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts(){
    return function(dispach){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( response => response.json() )
        .then( posts => dispach({
            type: FETCH_POSTS,
            payload: posts 
        }) );
    }
}

export function createPost(postData){
    return function(dispach){
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then( response => response.json() )
        .then( post => dispach({
            type: NEW_POST,
            payload: post
        }) );
    }
}