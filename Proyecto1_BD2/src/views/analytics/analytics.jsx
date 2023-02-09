import { useRef, useState } from 'react'
import './analytics.css'
import twitter from '../../assets/twitter.jpg'
import TopHashtags from '../../components/topHashtags/topHashtags'
import TopCountries from '../../components/topCountries/topCountries'
import LikesPerYear from '../../components/likesPerYear/likesPerYear'
import CommentAnalytics from '../../components/TextAnalytics/CommentAnalytics'
import TweetsPerYear from '../../components/tweetsPerYear/tweetsPerYear'
import Fans from '../../components/Fans/fans'
import { useNavigate } from 'react-router-dom'




const Analytics = () => {

    const [feed, setFeed] = useState(true);
    const tweetInfo= useRef({})

    const navigation = useNavigate()

    const clickTweet = (tweetComments) => {
        tweetInfo.current = tweetComments
        setFeed(false)
    }

    return (
        <div className="container-analytics">
            <div className='header-analytics'>
                <div onClick={() =>{navigation("/home")}} className="back-arrow2"/>
                <div className="Icon-container3" style={{ backgroundImage: `url(${twitter})` }} />
                <p>Twitter Analytics</p>
                <div className='helper' />
            </div>
            <div className='body-analytics'>
                <TopHashtags />
                <TopCountries />
                <CommentAnalytics title='Cantidad de comentarios en tu contenido'/>
                <LikesPerYear />
                <TweetsPerYear />
                <Fans />
            </div>
        </div>
    )
}

export default Analytics
