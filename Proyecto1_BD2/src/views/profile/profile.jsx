import { useState, useEffect } from 'react'
import './profile.css'
import twitter from '../../assets/twitter.jpg'
import LeftMenu from '../../components/LeftMenu.jsx'
import Profilefeed from '../../components/profile_feed/profile_feed.jsx'
import TweetDetail from '../tweetDetail/tweetDetail'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigation = useNavigate()

    const [feed, setFeed] = useState(true);
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    const user = localStorage.getItem('user')


    const getDescription = async() => {
        const url = 'http://localhost:5000/description/'
        const response = await fetch(url, {
          method:'GET',
          headers: {
            'username' : user,
          }
        })
        const responseJson = await response.json()
        setDesc(responseJson.desciption)
        setImage(responseJson.image)
      }
    
    useEffect(() => {
        getDescription()
    }, [])

    return (
        <div className="container-home">
            <div className="menu-container-home">
                <LeftMenu picture={image} />
            </div>
            <div className="info-container">
                <div className="back">
                    <div onClick={() =>{navigation("/home")}} className="back-arrow"/>
                    <p>{user}</p>
                </div>
                <div className="banner">
                    <div className="profpic" style={{backgroundImage:`url(${image})`}}/>
                </div>
                <div className="info">
                    <div className="username">{user}</div>
                    <div className="desc">{desc}</div>
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