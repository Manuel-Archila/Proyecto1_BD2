import { useState, useEffect, useRef } from 'react'
import './feed.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'


const Feed = ({ clickTweet, picture }) => {

    const [limit, setLimit] = useState(5)
    const [tweet, setTweet] = useState('')
    const [contenido, setContenido] = useState([])

    
    const getTweets = async() => {
        const url = 'http://localhost:5000/tweet/'
        const response = await fetch(url, {
          method:'GET',
          headers: {
            'limite' : limit,
          }
        })
        const responseJson = await response.json()
        setContenido(responseJson)
      }
    
    useEffect(() => {
         getTweets()
    }, [limit])

    const handleChange = (e) => {
        const value = e.target.value
        if (value.length < 130) {
            setTweet(value)
        } 
    }

    const Plus5 = () => {
        setLimit(limit+5)
    }

    const postTweet = async() => {
        if (tweet.length > 0)
        {
            const url = 'http://localhost:5000/tweet/'
            const user = localStorage.getItem('user')
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": user,
                    "text": tweet
                })
            })

            const responseJson = await response.json()
            const contenidoNew = [...contenido]
            contenidoNew.unshift(responseJson)
            setContenido(contenidoNew)
            setTweet('')
        }
    }

    return (
        <div className="container-feed">
            <div className="content-container">
                <div className="header">
                    <p>Home</p>
                </div>
                <div className="post-tweet">
                    <div className="text-container-feed">
                        <div className="circle-container">
                            <div className="circle" style={{backgroundImage:`url(${picture})`}} />
                        </div>
                        <textarea value={tweet} className='tw' maxLength="130" onChange={handleChange} placeholder="¿Qué está pasando?" />
                    </div>
                    <div className="button-post-container">
                        <div className="button-post" onClick={postTweet}>   
                            <p>Tweet</p>
                        </div>
                    </div>
                </div>
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
                               bandera={false}
                               image={tweeet.image}
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

export default Feed
