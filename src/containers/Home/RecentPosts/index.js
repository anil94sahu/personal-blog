import React from 'react'
import './style.css';
import Card from '../../../components/UI/Card';

export const RecentPosts = (props) => {
    return (
        <div style = {{...props.style}}>
                <Card style = {{marginBottom:'20px'}}>
                    <div className ='postImageWrapper'>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1568757836.jpg?crop=0.668xw:1.00xh;0.287xw,0&resize=980:*" alt=""/>

                    </div>

                    <div style={{textAlign:'center'}}>
                        <span>Featured</span>
                        <h2>Fitness Mantra To Live Fit Life</h2>
                        <span>posted on July 21, 2016 by sora blogging tips</span>
                        <p>Midst first it, you're multiply divided. There are throw</p>

                        <button>Read More</button>
                    </div>


                </Card>

        </div>
    )
}
