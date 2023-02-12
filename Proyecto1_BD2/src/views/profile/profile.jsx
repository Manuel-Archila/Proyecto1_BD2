import { useState, useEffect } from 'react'
import './profile.css'
import twitter from '../../assets/twitter.jpg'
import LeftMenu from '../../components/LeftMenu.jsx'
import Profilefeed from '../../components/profile_feed/profile_feed.jsx'
import TweetDetail from '../tweetDetail/tweetDetail'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigation = useNavigate()

    const [feed, setFeed] = useState(true)
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [edit, setEdit] = useState(false)

    const user = localStorage.getItem('user')

    const handleEdit = () => {
        if (edit === true) {
            onEdit()
        }
        setEdit(!edit)
    }

    const editDesc = (e) => {
        if (e.key === e.BACKSPACE) {
            setDesc(e.target.value)
        }
    }

    const onEdit = async () => {
        const URL = 'http://localhost:5000/description/'
        const user = localStorage.getItem('user')
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "username": user,
                "new_desc": desc,
            })
        })

        const responseJson = await response.json()
        console.log(responseJson)
    }


    const getDescription = async() => {
        const url = 'http://localhost:5000/description/'
        const response = await fetch(url, {
          method:'GET',
          headers: {
            'username' : user,
          }
        })
        const responseJson = await response.json()
        setDesc(responseJson.desciption)
        setImage(responseJson.image)
      }
    
    useEffect(() => {
        getDescription()
    }, [])



    return (
        <div className="container-home">
            <div className="menu-container-home">
                <LeftMenu picture={image} />
            </div>
            <div className="info-container">
                <div className="back">
                    <div onClick={() =>{navigation("/home")}} className="back-arrow"/>
                    <p>{user}</p>
                </div>
                <div className="banner">
                    <div className="profpic" style={{backgroundImage:`url(${image})`}}/>
                </div>
                <div className="info">
                    <div className="infotop">
                        <div className="username">{user}</div>
                        {!edit ? <p className='peditar' onClick={handleEdit}>Editar</p>
                            :<p className='peditar' onClick={handleEdit}>Confirmar</p>}
                    </div>
                    <div className='descontainer'>
                        {!edit ? <div className="desc">{desc}</div> : <textarea onChange={editDesc} maxLength="130" className="edit-tweet" >{desc}</textarea>}
                    </div>
                </div>
                <div className="yours">
                    <div className='yours-item'>Tweets</div>
                    <div className='yours-item'>Comments</div>
                    <div className='yours-item'>Likes</div>
                </div>
                <div className="feed-container">
                {feed ? <Profilefeed image={image} clickTweet={() => setFeed(false)}/> : <TweetDetail clickBack={() => setFeed(true)}/>}
                </div>
            </div>
            <div className="extra" />
        </div>
    )
}

export default Profile