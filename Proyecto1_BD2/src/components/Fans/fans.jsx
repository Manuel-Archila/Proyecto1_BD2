import { useState, useEffect } from 'react'
import './fans.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'

const Fans = ({ clickTweet }) => {
    const user = window.localStorage.getItem('user')

    const [fans, setFans] = useState([])

    const getFans = async() => {
        const url = 'http://localhost:5000/fans/'
        const response = await fetch(url, {
          method:'GET',
          headers: {
            "username": user
          }
        })
        const responseJson = await response.json()
        const data = []
        responseJson.map((element) => {data.push({"text": element._id, "value": element.count, "image": element.image})})
        setFans(data)
      }
    
    useEffect(() => {
         getFans()
    }, [])

    return (
        <div className="container-hashtags">
          <div className="hashtag-header">
            Top 5 fans de: {user} 
          </div>
          <div className="hashtags1">
            <div className='grid-container2'>
              {fans.map((element) => 
                <div className="fan-container">
                  <img className="image-fan" src={element.image}></img>
                  <div>{element.text}</div>
                </div>
              )}
            </div>
          </div>
        </div>
    )
}

export default Fans