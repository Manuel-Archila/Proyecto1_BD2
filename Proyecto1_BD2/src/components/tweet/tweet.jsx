import { useEffect, useRef, useState } from 'react'
import './tweet.css'
import like from '../../assets/heart.png'
import comment from '../../assets/comentario.png'
import twitter from '../../assets/twitter.jpg'

import p1 from '../../assets/personas/P1.jpeg'
import p2 from '../../assets/personas/P2.jpeg'
import p3 from '../../assets/personas/P3.jpeg'
import p4 from '../../assets/personas/P4.jpeg'
import p5 from '../../assets/personas/P5.jpeg'
import p7 from '../../assets/personas/P7.jpeg'
import p8 from '../../assets/personas/P8.jpeg'
import p9 from '../../assets/personas/P9.jpeg'
import p10 from '../../assets/personas/P10.jpeg'


const Tweet = ({ click,username,text,numberLikes,date,comentarios,comments_count,tweetInfo,bandera,image }) => {

    const getRandomInt = () => {
        return Math.floor(Math.random() * (pictures.length)) - 1;
    } 

    const pictures = [p1,p2,p3,p4,p5,p7,p8,p9,p10]
    const [likes, setLikes] = useState(numberLikes)
    const random = useRef(getRandomInt())
    const [refresh, setRefresh] = useState(false)
    const [edit, setEdit] = useState(false)
    const [tweetText, setTweetText] = useState(text.substring(text.length - 140, text.length))
    // const [image, setImage] = useState(getImage())

    
    const handleClick = () => {
        click(tweetInfo)
    }

    const clickLike = async () => {
        const URL = 'http://localhost:5000/like/'
        const id = tweetInfo._id.$oid
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "id_tweet": id,
            })
        })

        const responseJson = await response.json()
        setLikes(likes + 1)
    }

    

    const deleteTweet = async () => {
        const URL = 'http://localhost:5000/tweet/'
        const id = tweetInfo._id.$oid
        const response = await fetch(URL, {
            method: 'DELETE',
            headers: {
                "id_tweet": id
            }
        })

        const responseJson = await response.json()
        setRefresh(!refresh)
    }

    const editTweet = (e) => {
        if (e.key === e.BACKSPACE) {
            setTweetText(e.target.value)
        }
    }

    const onEdit = async () => {
        const URL = 'http://localhost:5000/tweet/'
        const id = tweetInfo._id.$oid
        const user = localStorage.getItem('user')
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "id_tweet": id,
                "likes": likes,
                "text": tweetText
            })
        })

        const responseJson = await response.json()
    }

    const handleEdit = () => {
        if (edit === true) {
            onEdit()
        }
        setEdit(!edit)
    }

    useEffect(() => {
        //getImage()
    }, [refresh])
    
    return (
        <div className="container-tweet">
            <div className="header" />
            { bandera &&
                <div className="edition-container">
                    <div className="close-boton" >
                        <p className='peditar' onClick={handleEdit}>Editar</p>
                        <p className='pdelete' onClick={deleteTweet} >X</p>
                    </div>
                </div>
            }
            <div className="content-container-tweet" onClick={edit ? null : handleClick}>
                <div className="user-circle-container">
                    <div className="user-circle" style={{ backgroundImage: `url(${image})` }} />
                </div>
                <div className="content">
                    <div className="username">
                        <p>{username}</p>
                        <p className="date-tweet"> · </p>
                        <p className="date-tweet">{date}</p>
                    </div>
                    {
                        !edit ? 
                        <div className="content-tweet">
                            {tweetText}
                        </div> :
                        <textarea onChange={editTweet} maxLength="130" className="edit-tweet" >{tweetText}</textarea>
                    }
                </div>
            </div>
            <div className="footer-tweet">
                <div className="likes-tweet" onClick={clickLike}>
                    <img className="icon-tweet" src={like} />
                    <p>{likes}</p>
                </div>
                <div className="comments-tweet">
                    <img className="comment-tweet" src={comment} />
                    <p>{comments_count}</p>
                </div>
            </div>
        </div>
    )
}

export default Tweet


