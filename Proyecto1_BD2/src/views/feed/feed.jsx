import { useState } from 'react'
import './feed.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'

const Feed = ({ clickTweet }) => {

    return (
        <div className="container-feed">
            <div className="content-container">
                <div className="header">
                    <p>Home</p>
                </div>
                <div className="post-tweet">
                    <div className="text-container">
                        <div className="circle-container">
                            <div className="circle" />
                        </div>
                        <textarea placeholder="¿Qué está pasando?" />
                    </div>
                    <div className="button-post-container">
                        <div className="button-post">   
                            <p>Tweet</p>
                        </div>
                    </div>
                </div>
                <div className="scroll">
                    <Tweet onClick={clickTweet}/>
                    <Tweet onClick={clickTweet}/>
                    <Tweet onClick={clickTweet}/>
                </div>
            </div>
        </div>
    )
}

export default Feed
