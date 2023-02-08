import { useRef, useState } from 'react'
import './analytics.css'
import twitter from '../../assets/twitter.jpg'
import TopHashtags from '../../components/topHashtags/topHashtags'
import TopCountries from '../../components/topCountries/topCountries'
import LikeAnalytics from '../../components/TextAnalytics/LikeAnalytics'
import CommentAnalytics from '../../components/TextAnalytics/CommentAnalytics'



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
                <TopCountries />
                <LikeAnalytics title='Likes recibidos en los ultimos 3 años' />
                <CommentAnalytics title='Cantidad de comentarios recibidos'/>
                <div className='pr'></div>
                <div className='pr'></div>
                <div className='pr'></div>
                <div className='pr'></div>
            </div>
        </div>
    )
}

export default Analytics
