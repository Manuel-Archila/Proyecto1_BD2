import { useState } from 'react'
import './comment.css'
import like from '../../assets/heart.png'
import comment from '../../assets/comentario.png'
import twitter from '../../assets/twitter.jpg'

import p1 from '../../assets/personas/P1.jpeg'

const Comment = ({ onClick,username,text,numberLikes,date,comentarios,comments_count }) => {
    return (
        <div onClick={onClick} className="container-tweet">
            <div className="header-comment" />
            <div className="content-container-tweet">
                <div className="user-circle-container">
                    <div className="user-circle" style={{ backgroundImage: `url(${p1})` }} />
                </div>
                <div className="content">
                    <div className="username">
                        <p>{username}</p>
                        <p className="date-tweet"> · </p>
                        <p className="date-tweet">{date}</p>
                    </div>
                    <div className="content-tweet">
                        {text.substring(0, 130)}
                    </div>
                </div>
            </div>
            <div className="footer-tweet">
            </div>
        </div>
    )
}

export default Comment
