import { useState, useEffect } from 'react'
import './tweetDetail.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'
import like from '../../assets/heart.png'
import flecha from '../../assets/flecha.jpg'
import Comment from '../../components/comment/comment'

const TweetDetail = ({ clickBack, tweetInfo, userImage }) => {

    const [reply, setReply] = useState('')
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState(0)

    const handleChange = (e) => {
        const value = e.target.value
        if (value.length < 130) {
            setReply(value)
        }
    }

    const getLikes = async () => {
        const URL = 'http://localhost:5000/like/'
        const id = tweetInfo._id.$oid
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'id_tweet': id
            }
        })

        const responseJSON = await response.json()
        setLikes(parseInt(responseJSON.likes))
    }

    const getComments = async () => {
        const URL = 'http://localhost:5000/comments/'
        const id = tweetInfo._id.$oid
        const user = localStorage.getItem('user')
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'id_tweet': tweetInfo._id.$oid
            }
        })

        const responseJson = await response.json()
        console.log(responseJson)
        setComments(responseJson)
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


    const submitReply = async () => {
        if (reply.length > 0) {
            const URL = 'http://localhost:5000/tweetComment/'
            const id = tweetInfo._id.$oid
            const user = localStorage.getItem('user')
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    "user": user,
                    "id_tweet": id,
                    "content": reply
                })
            })

            const responseJson = await response.json()
            const commentsNew = [...comments]
            commentsNew.unshift(responseJson)
            setComments(commentsNew)
            setReply('')
        }
    }


    useEffect(() => {
        getComments()
        getLikes()
    }, [])


    return (
        <div className="container-detail">
            <div className="content-container-detail">
                <div className="header-detail">
                    <img onClick={clickBack} src={flecha} className="arrow-back" />
                    <p>Tweet</p>
                </div>
                <div className="post-tweet-details">
                    <div className="text-container">
                        <div className="circle-container" >
                            <div className="circle" style={{backgroundImage: `url(${tweetInfo.image})`}}/>
                        </div>
                        <div className='user'>
                            {tweetInfo.username}
                        </div>
                        <div className='extra-details' />
                    </div>
                    <div className="info-tweet-container">
                        <p>{tweetInfo.text.substring(0, 130)}</p>
                    </div>
                    <div className="meta-tweet-container">
                        <p className="date-tweet">{tweetInfo.date}</p>
                        <p className="date-tweet"> · </p>
                    </div>
                    <div className="likes-tweet-container">
                        <div className='box-cont'>
                            <p className='like-count'>{likes}</p>
                            <p className="date-tweet">Likes</p>
                        </div>
                    </div>
                    <div className="likes-tweet-container">
                        <div className='box-cont2' onClick={clickLike}>
                            <img className="icon-tweet-details" src={like} />
                        </div>
                    </div>
                    <div className='reply-details'>
                        <div className="circle-container">
                            <div className="circle" style={{backgroundImage: `url(${userImage})`}}/>
                        </div>
                        <textarea maxLength='130' value={reply} onChange={handleChange} className='reply-text' placeholder='Tweetea tu respuesta'/>
                    </div>
                    <div className='button-reply-container'>
                        <div className='button-reply' onClick={submitReply}>
                            Responder
                        </div>
                    </div>
                </div>
                <div className="scroll-comments">
                    {comments.map((comment) => <Comment 
                        key={comment.user}
                        username={comment.user}
                        text={comment.text}
                        date={comment.date}
                        tweet_id={tweetInfo._id.$oid}
                        image={comment.image}  />)
                    }
                </div>
            </div>
        </div>
    )
}

export default TweetDetail
