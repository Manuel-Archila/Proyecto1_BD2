import { useRef, useState, useEffect } from 'react'
import './home.css'
import twitter from '../../assets/twitter.jpg'
import LeftMenu from '../../components/LeftMenu.jsx'
import Feed from '../feed/feed.jsx'
import TweetDetail from '../tweetDetail/tweetDetail'

const Home = () => {

    const [feed, setFeed] = useState(true);
    const [image, setImage] = useState('')
    const tweetInfo= useRef({})
    const user = window.localStorage.getItem('user')

    const clickTweet = (tweetComments) => {
        tweetInfo.current = tweetComments
        setFeed(false)
    }

    const getinfo = async() => {
        const url = 'http://localhost:5000/homeImage/'
        const response = await fetch(url, {
          method:'GET',
          headers: {
            'username' : user,
          }
        })
        const responseJson = await response.json()
        console.log(responseJson)
        setImage(responseJson.image)

    }

    useEffect(() =>{
        getinfo()
    },[])

    return (
        <div className="container-home">
            <div className="menu-container-home">
                <LeftMenu picture={image}/>
            </div>
            <div className="feed-container">
                {feed ? <Feed clickTweet={clickTweet} picture={image}/> : <TweetDetail tweetInfo={tweetInfo.current} clickBack={() => setFeed(true)}/>}
            </div>
            <div className="extra" />
        </div>
    )
}

export default Home
