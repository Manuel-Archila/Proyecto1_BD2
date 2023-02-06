import { useState, useEffect } from 'react'
import './tweetDetail.css'
import twitter from '../../assets/twitter.jpg'
import Tweet from '../../components/tweet/tweet.jsx'
import like from '../../assets/heart.png'
import flecha from '../../assets/flecha.jpg'
import Comment from '../../components/comment/comment'

const TweetDetail = ({ clickBack, tweetInfo }) => {

    const [reply, setReply] = useState('')
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState(tweetInfo.likes)

    const handleChange = (e) => {
        const value = e.target.value
        if (value.length < 130) {
            setReply(value)
        }
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
        setComments(responseJson[0].comments)
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
                        <div className="circle-container">
                            <div className="circle" />
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
                            <div className="circle" />
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
                        username={comment.username_comment}
                        text={comment.text_comment}
                        date={comment.date_comment}  />)
                    }
                </div>
            </div>
        </div>
    )
}

export default TweetDetail
