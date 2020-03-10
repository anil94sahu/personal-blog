import React from 'react';
import './style.css';
import Header from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import { RecentPosts } from './RecentPosts';
import blogData from '../../data/blog.json';


const SideImage = props => {
    return (
        <div  style = {{height:`${props.height}px`}}>
            <img src={props.src} alt=""/>
        </div>  
    )
}

const ImageGallery = props => (
    <div className = "gallaryPost" style = {props.gallaryStyle}>
                <section style = {{width:'70%'}}>
                    <div className="mainImageWrapper">
                        <img src={require('../../blogPostImages/' + props.imagesArray[0]) } alt=""/>
                    </div>
                </section>
                <section className ="sideImageWrapper" style = {{width:'30%'}}>
                    <SideImage
                        height={props.sideImageHeight}
                        src={require('../../blogPostImages/' + props.imagesArray[1]) }
                        alt = ""
                   / >
                    <SideImage
                        height={props.sideImageHeight}
                        src={require('../../blogPostImages/' + props.imagesArray[2]) }
                        alt = ""
                   / >
                     <SideImage
                        height={props.sideImageHeight}
                        src={require('../../blogPostImages/' + props.imagesArray[3]) }
                        alt = ""
                   / >
                </section>
    </div>
)

const Home = props => {
    const gallaryHeight = 900;
    const gallaryStyle = {
        height: gallaryHeight + 'px',
        overflow: 'hidden'
    }
    const sideImageHeight = gallaryHeight/3;

    const imgAr = blogData.data.map(post => post.blogImage);
    console.log(imgAr);
    return (
        <div>
            <Card style = {{margin:'20px 0'}}>
               <ImageGallery largeWidth = "70%"
                            smallWidth ="30%"
                            sideImageHeight = {sideImageHeight}
                            gallaryStyle = {gallaryStyle}
                            imagesArray = {imgAr}
               >
               </ImageGallery> 
            </Card>

        <section className = "HomeContainer">
            <RecentPosts style = {{width:'70%'}}/>

            <Sidebar />
        </section>
           
        </div>
    )
}


export default Home;