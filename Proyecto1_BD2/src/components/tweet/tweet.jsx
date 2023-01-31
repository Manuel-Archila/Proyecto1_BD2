import { useState } from 'react'
import './tweet.css'
import like from '../../assets/heart.png'
import comment from '../../assets/comentario.png'
import twitter from '../../assets/twitter.jpg'

const Tweet = ({ onClick }) => {
    return (
        <div onClick={onClick} className="container-tweet">
            <div className="header" />
            <div className="content-container-tweet">
                <div className="user-circle-container">
                    <div className="user-circle" />
                </div>
                <div className="content">
                    <div className="username">
                        <p>Ja'MarrChase</p>
                        <p className="date-tweet"> · </p>
                        <p className="date-tweet">Jan 29</p>
                    </div>
                    <div className="content">
                        3 3rd and 9?
                    </div>
                </div>
            </div>
            <div className="footer-tweet">
                <div className="likes-tweet">
                    <img className="icon-tweet" src={like} />
                    <p>1k</p>
                </div>
                <div className="comments-tweet">
                    <img className="comment-tweet" src={comment} />
                    <p>1k</p>
                </div>
            </div>
        </div>
    )
}

export default Tweet
