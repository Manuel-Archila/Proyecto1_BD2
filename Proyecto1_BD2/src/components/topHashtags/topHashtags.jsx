import { useState, useEffect } from 'react'
import './topHashtags.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'
import WordCloud from 'react-d3-cloud';

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
        console.log(data)
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
          <div className="hashtags">
            <WordCloud data={hashtags} />
          </div>
        </div>
    )
}

export default TopHashtags