import { useRef, useState } from 'react'
import './analytics.css'
import twitter from '../../assets/twitter.jpg'
import TopHashtags from '../../components/topHashtags/topHashtags'
import TopCountries from '../../components/topCountries/topCountries'
import LikesPerYear from '../../components/likesPerYear/likesPerYear'
import CommentAnalytics from '../../components/TextAnalytics/CommentAnalytics'
import TweetsPerYear from '../../components/tweetsPerYear/tweetsPerYear'
import Fans from '../../components/Fans/fans'
import MongoC from '../../components/MongoC/MongoC'

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
                <Fans />
                <CommentAnalytics title='Cantidad de comentarios en tu contenido'/>
                <LikesPerYear />
                <TweetsPerYear />
                <TopCountries />

                <div className="container-hashtags">
                    <MongoC chartID="63e54bb5-6665-4f44-8aca-e36419c643d0"
                        title="s" />
                </div>
                <div className="container-hashtags">
                    <MongoC chartID="63e5516c-91d7-48da-8dad-4662153b1ef8"
                        title="s" />
                </div>
                <div className="container-hashtags">
                    <MongoC chartID="63e549fb-7e11-458f-8ceb-487cfd8986f5"
                        title="s" />
                </div>
            </div>
        </div>
    )
}

export default Analytics
