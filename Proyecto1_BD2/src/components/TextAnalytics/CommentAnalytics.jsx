import { useState, useEffect } from 'react'
import './CommentAnalytics.css'


const CommentAnalytics = ({title}) => {

    const [totalLikes, setTotalLikes] = useState(0)
    const user = localStorage.getItem('user')

    const getLikesA = async() => {
        const url = 'http://localhost:5000/commentsA/'
        const response = await fetch(url, {
          method:'GET',
          headers: {
            "username": user,
          }
        })
        const responseJson = await response.json()
        setTotalLikes(responseJson[0]["total_comments"])
      }
    
    useEffect(() => {
      getLikesA()
    }, [])

    return (
        <div className="LikesA-container">
          <p className='title_likes'>{title}</p>
          <p className='number_likes'>{totalLikes}</p>
          
        </div>
    )
}

export default CommentAnalytics