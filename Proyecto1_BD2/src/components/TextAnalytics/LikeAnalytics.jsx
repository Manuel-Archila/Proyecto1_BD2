import { useState, useEffect } from 'react'
import './LikeAnalytics.css'


const LikeAnalytics = ({title}) => {

    const [totalLikes, setTotalLikes] = useState(0)

    const getLikesA = async() => {
        const url = 'http://localhost:5000/LikesA/'
        const response = await fetch(url, {
          method:'GET',
          headers: {
            "username": "Rhona Vaughan",
            "year": "2023",
          }
        })
        const responseJson = await response.json()
        console.log(responseJson[0]["totalLikes"])
        setTotalLikes(responseJson[0]["totalLikes"])
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

export default LikeAnalytics