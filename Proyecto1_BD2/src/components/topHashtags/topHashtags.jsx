import { useState, useEffect } from 'react'
import './topHashtags.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'

const TopHashtags = ({ clickTweet }) => {

    const [hashtags, setHashtags] = useState([])

    const getHashtags = async() => {
        const url = 'http://localhost:5000/hashtags/'
        const response = await fetch(url, {
          method:'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const responseJson = await response.json()
        setHashtags(responseJson)
      }
    
    useEffect(() => {
         getHashtags()
    }, [])

    return (
        <div className="container-hashtags">
            {hashtags.map((hashtag) => <div>{hashtag._id}</div>)}
        </div>
    )
}

export default TopHashtags