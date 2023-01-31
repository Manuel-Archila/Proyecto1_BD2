import { useState } from 'react'
import './tweetDetail.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'
import like from '../../assets/heart.png'
import flecha from '../../assets/flecha.jpg'

const TweetDetail = ({ clickBack }) => {
    return (
        <div className="container-detail">
            <div className="content-container-detail">
                <div className="header-detail">
                    <img onClick={clickBack} src={flecha} className="arrow-back" />
                    <p>Tweet</p>
                </div>
                <div className="post-tweet-details">
                    <div className="text-container">
                        <div className="circle-container">
                            <div className="circle" />
                        </div>
                        <div className='user'>
                            Ja'MarrChase
                        </div>
                        <div className='extra-details' />
                    </div>
                    <div className="info-tweet-container">
                        <p>Tweet text xdxd</p>
                    </div>
                    <div className="meta-tweet-container">
                        <p className="date-tweet">10:00 PM</p>
                        <p className="date-tweet"> · </p>
                        <p className="date-tweet">Jan 29, 2023</p>
                    </div>
                    <div className="likes-tweet-container">
                        <div className='box-cont'>
                            <p className='like-count'>74.1K</p>
                            <p className="date-tweet">Likes</p>
                        </div>
                    </div>
                    <div className="likes-tweet-container">
                        <div className='box-cont2'>
                            <img className="icon-tweet-details" src={like} />
                        </div>
                    </div>
                    <div className='reply-details'>
                        <div className="circle-container">
                            <div className="circle" />
                        </div>
                        <textarea className='reply-text' placeholder='Tweetea tu respuesta'/>
                    </div>
                    <div className='button-reply-container'>
                        <div className='button-reply'>
                            Responder
                        </div>
                    </div>
                </div>
                <div className="scroll-comments">
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </div>
            </div>
        </div>
    )
}

export default TweetDetail
