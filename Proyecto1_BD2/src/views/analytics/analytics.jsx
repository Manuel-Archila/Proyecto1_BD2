import { useRef, useState } from 'react'
import './analytics.css'
import twitter from '../../assets/twitter.jpg'
import LeftMenu from '../../components/LeftMenu.jsx'
import Feed from '../feed/feed.jsx'
import TweetDetail from '../tweetDetail/tweetDetail'

const Analytics = () => {

    const [feed, setFeed] = useState(true);
    const tweetInfo= useRef({})

    const clickTweet = (tweetComments) => {
        tweetInfo.current = tweetComments
        setFeed(false)
    }

    return (
        <div className="container-home">
        </div>
    )
}

export default Analytics
