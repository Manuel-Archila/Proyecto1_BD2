import { useState, useEffect } from 'react'
import './profile_feed.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'

const Profilefeed = ({ clickTweet }) => {
    
    const user = localStorage.getItem('user')
    const [limit, setLimit] = useState(5)
    const [contenido, setContenido] = useState([])

    const getMyTweets = async() => {
        const url = 'http://localhost:5000/perfil/'
        const response = await fetch(url, {
          method:'GET',
          headers: {
            'name': user,
            'limite' : limit,
          }
        })
        const responseJson = await response.json()
        setContenido(responseJson)
      }
    
    useEffect(() => {
         getMyTweets()
    }, [limit])
    const Plus5 = () => {
        setLimit(limit+5)
    }


    return (
        <div className="container-feed">
            <div className="content-container">
                <div className="scroll">
                {contenido.map((tweeet)=>(
                        <Tweet key={tweeet._id.$oid}
                               click={clickTweet} 
                               username ={tweeet.username} 
                               date = {tweeet.date} 
                               text = {tweeet.text}
                               numberLikes = {tweeet.likes}
                               comentarios = {tweeet.comments}
                               comments_count = {tweeet.comments_count}
                               tweetInfo={tweeet}
                               />
                        ))}
                    <div className="button-more-container">
                        <div className="button-post" onClick={Plus5}>   
                            <p>Ver más</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profilefeed