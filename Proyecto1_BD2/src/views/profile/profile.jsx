import { useState } from 'react'
import './profile.css'
import twitter from '../../assets/twitter.jpg'
import LeftMenu from '../../components/LeftMenu.jsx'
import Profilefeed from '../../components/profile_feed/profile_feed.jsx'
import TweetDetail from '../tweetDetail/tweetDetail'

const Profile = () => {

    const [feed, setFeed] = useState(true);

    return (
        <div className="container-home">
            <div className="menu-container-home">
                <LeftMenu />
            </div>
            <div className="info-container">
                <div className="back">
                    <div className="back-arrow"/>
                    <p>Manuel Archila</p>
                </div>
                <div className="banner">
                    <div className="circle"/>
                </div>
                <div className="info">

                </div>
                <div className="feed-container">
                {feed ? <Profilefeed clickTweet={() => setFeed(false)}/> : <TweetDetail clickBack={() => setFeed(true)}/>}
                </div>
            </div>
            <div className="extra" />
        </div>
    )
}

export default Profile