import { useState } from 'react'
import './home.css'
import twitter from '../../assets/twitter.jpg'
import LeftMenu from '../../components/LeftMenu.jsx'

const Home = () => {
    return (
        <div className="container-home">
            <div className="content-container">
                <div className="header">
                    <p>Home</p>
                </div>
                <div className="post-tweet">
                    <div className="text-container">
                        <div className="circle" />
                        <input type="multiline" placeholder="¿Qué está pasando?"/>
                    </div>
                    <div className="button-post-container">
                        <div className="button-post">   
                            <p>Tweet</p>
                        </div>
                    </div>
                </div>
                <div className="scroll">

                </div>
            </div>
        </div>
    )
}

export default Home
