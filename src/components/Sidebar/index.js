import React, {useEffect, useState} from 'react'
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom';
export const Sidebar = (props) => {

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts])

    return (
      <div className="sidebarContainer" >
        <Card style = {{marginBottom:'20px', padding:'20px', boxSizing: 'border-box'}}>
            <div className="cardHeader">
              <span>About Us</span> 
              
            </div>
            <div className="profileImageContainer">
                <img src="https://i1.sndcdn.com/avatars-000385308122-h21gzy-t500x500.jpg" alt="profile image"/>
            </div>
            <div className="cardBody">
              <p className="personalBio">My name is Anil Sahu i am a software developers</p>
            </div>
        </Card>

        <Card style = {{marginBottom:'20px', padding:'20px', boxSizing: 'border-box'}}>
            <div className="cardHeader">
              Social Network
            </div>
        </Card>

        <Card style = {{marginBottom:'20px', padding:'20px', boxSizing: 'border-box'}}>
            <div className="cardHeader">
              <span>Recent Posts</span> 
            </div>

            <div className="recentPosts">
              {
                posts.map(post => {
                  return (
                    <NavLink key={post.id} to={ `/post/${post.slug}` } >
                      <div className="recentPost">
                      <h3>{post.blogTitle}</h3>
                      <span>{post.postedOn}</span>
                    </div>
                    </NavLink>
                  )
                })
              }
             

             {/*  <div className="recentPost">
                <h3>Post Title</h3>
                <span>July 21, 2018</span>
              </div> */}
            </div>
        </Card>
        
      </div>
       
    )
}
