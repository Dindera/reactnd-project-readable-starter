import * as React from 'react';
import { Button, Collapse, Card } from 'react-bootstrap'
import { GoReply } from "react-icons/go";
import { FaHeartBroken, FaHeart } from "react-icons/fa";
import { Link, Router } from 'react-router-dom'

export interface IPostsProps {
  posts: []
}

export interface IpostState {
  isOpen: false
}

export default class Posts extends React.Component<IPostsProps, any> {
  
  constructor(props: any){
    super(props);

  }

  public render() {
    const { posts } = this.props
    const voteScore = posts.map((post: any)=> (post.voteScore))
    // console.log(voteScore)
    return (
      <>
      
      { posts.map((post: any) => (
        <div key={post.id} style={{padding: 10, backgroundColor: 'white', marginBottom: 10}}>
       <Card body className="card_b">
       <div style={{display: 'flex', justifyContent: 'space-between'}}>
       <Link to={`/posts/${post.id}`} style={{color: 'gray'}}>{post.title}</Link>
       <i><FaHeart style={{color: '#eb7878'}}/>  {post.voteScore >=  0 ? post.voteScore : 0 }  <FaHeartBroken style={{color: '#f3afaf'}}/>  {post.voteScore <= 0 ? post.voteScore : 0 } <GoReply/>  {post.commentCount} </i> 
       </div>
       </Card>
        </div>
      ))
      }
   
    </>
    )
  }  
}

