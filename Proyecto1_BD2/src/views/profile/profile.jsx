import { useState } from 'react'
import './profile.css'
import twitter from '../../assets/twitter.jpg'
import LeftMenu from '../../components/LeftMenu.jsx'
import Profilefeed from '../../components/profile_feed/profile_feed.jsx'
import TweetDetail from '../tweetDetail/tweetDetail'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigation = useNavigate()

    const [feed, setFeed] = useState(true);

    return (
        <div className="container-home">
            <div className="menu-container-home">
                <LeftMenu />
            </div>
            <div className="info-container">
                <div className="back">
                    <div onClick={() =>{navigation("/home")}} className="back-arrow"/>
                    <p>Archila15</p>
                </div>
                <div className="banner">
                    <div className="profpic"/>
                </div>
                <div className="info">
                    <div className="name">
                        <h2>Archila15</h2>
                    </div>
                </div>
                <div className="yours">
                    <div className='yours-item'>Tweets</div>
                    <div className='yours-item'>Comments</div>
                    <div className='yours-item'>Likes</div>
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