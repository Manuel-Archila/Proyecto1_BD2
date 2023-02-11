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
        const data = []
        responseJson.map((element) => {data.push({"text": element._id, "value": element.count})})
        setHashtags(data)
      }
    
    useEffect(() => {
         getHashtags()
    }, [])

    return (
        <div className="container-hashtags">
          <div className="hashtag-header">
            Top 10 hashtags del momento
          </div>
          <div className="hashtags1">
            <div className='grid-container2'>
              {hashtags.map((element) => <div key={element.text}>{element.text}</div>)}
            </div>
          </div>
        </div>
    )
}

export default TopHashtags