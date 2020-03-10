import React, {useState, useEffect} from 'react'
import './style.css';
import blogPost from '../../data/blog.json';
import Card from '../UI/Card';
export const BlogPost = (props) => {

  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle : "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  const [slug, setSlug] = useState("");
  
  useEffect(() => {
    const slug = props.match.params.slug;
    const post = blogPost.data.find(post => post.slug === slug);
    setPost(post);
    setSlug(slug);
  }, [post, props.match.params.slug]);

  if(post.blogImage === "")return null;
    return (
      <div className="blogPostContainer">
          <Card >
              <div className="blogHeader">
                  <span className="blogCategory">{post.blogCategory}</span>
                  <h1 className="postTitle">{post.blogTitle}</h1>
                  <span className="postedBy">posted on {post.postedOn} by {post.author} Tips</span>
              </div>
              <div className="postImageContainer">
                  <img src={require(`../../blogPostImages/${post.blogImage}`)} alt="post images"/>
              </div>
              
              <div className="postContent">
                <h3>{post.blogTitle}</h3>
                <p>{post.blogText} </p>
              </div>
            </Card>
      </div>
       
    )
}
