import { useState, useEffect } from 'react'
import './profile_feed.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'

const Profilefeed = ({ clickTweet, image }) => {
    
    const user = localStorage.getItem('user')
    const [limit, setLimit] = useState(5)
    const [contenido, setContenido] = useState([])

    const getMyTweets = async() => {
        const url = 'http://localhost:5000/perfil/'
        const userId = localStorage.getItem('userId')
        const response = await fetch(url, {
          method:'GET',
          headers: {
            'userId': userId,
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

    const onDelete = (index) => {
        console.log(index)
        const contenidoNew = [...contenido]
        contenidoNew.splice(index, 1)
        setContenido(contenidoNew)
    }


    return (
        <div className="container-feed">
            <div className="content-container">
                <div className="scroll">
                {contenido.map((tweeet, index)=>(
                        <Tweet key={tweeet._id.$oid}
                               click={clickTweet} 
                               username ={user} 
                               date = {tweeet.date} 
                               text = {tweeet.text}
                               numberLikes = {tweeet.likes}
                               comentarios = {tweeet.comments}
                               comments_count = {tweeet.comments_count}
                               image={image}
                               tweetInfo={tweeet}
                               bandera={true}
                               deleteFunc={onDelete}
                               index={index}

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