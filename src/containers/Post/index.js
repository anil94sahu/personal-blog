import React from 'react'
import './style.css';
import { BlogPost } from '../../components/BlogPost';
import { Sidebar } from '../../components/Sidebar';
export const Post = (props) => {
    console.log(props);

    return (
        <section className="container">
            <BlogPost {...props} />
            <Sidebar {...props}/>

        </section>
    )
}
