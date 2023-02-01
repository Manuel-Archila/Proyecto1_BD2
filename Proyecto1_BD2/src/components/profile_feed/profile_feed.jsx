import { useState } from 'react'
import './profile_feed.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'

const Profilefeed = ({ clickTweet }) => {

    return (
        <div className="container-feed">
            <div className="content-container">
                <div className="scroll">
                    <Tweet onClick={clickTweet}/>
                    <Tweet onClick={clickTweet}/>
                    <Tweet onClick={clickTweet}/>
                </div>
            </div>
        </div>
    )
}

export default Profilefeed