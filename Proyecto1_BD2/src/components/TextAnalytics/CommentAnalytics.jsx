import { useState, useEffect } from 'react'
import './CommentAnalytics.css'


const CommentAnalytics = ({title}) => {

    const [totalLikes, setTotalLikes] = useState(0)
    const user = localStorage.getItem('user')
    const userid = localStorage.getItem('userId')


    const getCommentsA = async() => {
        const url = 'http://localhost:5000/commentsA/'
        const response = await fetch(url, {
          method:'GET',
          headers: {
            "userId": userid,
          }
        })
        const responseJson = await response.json()
        setTotalLikes(responseJson[0]["total_comments"])
      }
    
    useEffect(() => {
      getCommentsA()
    }, [])

    return (
        <div className="LikesA-container">
          <p className='title_likes'>{title}</p>
          <p className='number_likes'>{totalLikes}</p>
          
        </div>
    )
}

export default CommentAnalytics