import { useRef, useState } from 'react'
import './analytics.css'
import twitter from '../../assets/twitter.jpg'
import TopHashtags from '../../components/topHashtags/topHashtags'

const Analytics = () => {

    const [feed, setFeed] = useState(true);
    const tweetInfo= useRef({})

    const clickTweet = (tweetComments) => {
        tweetInfo.current = tweetComments
        setFeed(false)
    }

    return (
        <div className="container-analytics">
            <div className='header-analytics'>
            <div className="Icon-container3" style={{ backgroundImage: `url(${twitter})` }} />
                <p>Twitter Analytics</p>
                <div className='helper' />
            </div>
            <div className='body-analytics'>
                <TopHashtags />
                <div className='pr'></div>
                <div className='pr'></div>
                <div className='pr'></div>
                <div className='pr'></div>
                <div className='pr'></div>
            </div>
        </div>
    )
}

export default Analytics
