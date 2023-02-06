import { useRef, useState } from 'react'
import './home.css'
import twitter from '../../assets/twitter.jpg'
import LeftMenu from '../../components/LeftMenu.jsx'
import Feed from '../feed/feed.jsx'
import TweetDetail from '../tweetDetail/tweetDetail'

const Home = () => {

    const [feed, setFeed] = useState(true);
    const tweetInfo= useRef({})

    const clickTweet = (tweetComments) => {
        tweetInfo.current = tweetComments
        setFeed(false)
    }

    return (
        <div className="container-home">
            <div className="menu-container-home">
                <LeftMenu />
            </div>
            <div className="feed-container">
                {feed ? <Feed clickTweet={clickTweet}/> : <TweetDetail tweetInfo={tweetInfo.current} clickBack={() => setFeed(true)}/>}
            </div>
            <div className="extra" />
        </div>
    )
}

export default Home
