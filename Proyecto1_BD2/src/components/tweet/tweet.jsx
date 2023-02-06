import { useState } from 'react'
import './tweet.css'
import like from '../../assets/heart.png'
import comment from '../../assets/comentario.png'
import twitter from '../../assets/twitter.jpg'

import p1 from '../../assets/personas/P1.jpeg'
import p2 from '../../assets/personas/P2.jpeg'
import p3 from '../../assets/personas/P3.jpeg'
import p4 from '../../assets/personas/P4.jpeg'
import p5 from '../../assets/personas/P5.jpeg'
import p7 from '../../assets/personas/P7.jpeg'
import p8 from '../../assets/personas/P8.jpeg'
import p9 from '../../assets/personas/P9.jpeg'
import p10 from '../../assets/personas/P10.jpeg'


const Tweet = ({ click,username,text,numberLikes,date,comentarios,comments_count,tweetInfo }) => {

    const pictures = [p1,p2,p3,p4,p5,p7,p8,p9,p10]

    const getRandomInt = () => {
            return Math.floor(Math.random() * (pictures.length)) - 1;
        } 
    
    
    const handleClick = () => {
        console.log(tweetInfo)
        click(tweetInfo)
    }
    

    return (
        <div onClick={handleClick} className="container-tweet">
            <div className="header" />
            <div className="content-container-tweet">
                <div className="user-circle-container">
                    <div className="user-circle" style={{ backgroundImage: `url(${pictures[getRandomInt()]})` }} />
                </div>
                <div className="content">
                    <div className="username">
                        <p>{username}</p>
                        <p className="date-tweet"> · </p>
                        <p className="date-tweet">{date}</p>
                    </div>
                    <div className="content-tweet">
                        {text.substring(0,130)}
                    </div>
                </div>
            </div>
            <div className="footer-tweet">
                <div className="likes-tweet">
                    <img className="icon-tweet" src={like} />
                    <p>{numberLikes}</p>
                </div>
                <div className="comments-tweet">
                    <img className="comment-tweet" src={comment} />
                    <p>{comments_count}</p>
                </div>
            </div>
        </div>
    )
}

export default Tweet
