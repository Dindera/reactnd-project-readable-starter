const api = 'http://localhost:3001'

const headers = {
    'Authorization': 'whatever-you-want'
}


export const getAll = () => 
fetch(`${api}/categories`, { headers })
.then(res => res.json())
.then(data => data.categories)

export const posts = () => 
 fetch(`${api}/posts`, { headers })
 .then(res => res.json())
 .then(data => data)   
