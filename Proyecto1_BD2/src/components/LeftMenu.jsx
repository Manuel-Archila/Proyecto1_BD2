import './LeftMenu.css'
import twitter from '../assets/twitter.jpg'
import casa from '../assets/casita.jpg'
import lupa from '../assets/lupa.jpg'
import campana from '../assets/campana.jpg'
import mensaje from '../assets/chat.jpg'
import perfil from '../assets/perfil.jpg'
import opciones from '../assets/opcion.jpg'
import analisis from '../assets/analisis.jpg'
import foto from '../assets/empty_profile.jpg'
import { useNavigate } from 'react-router-dom'
import Switch from '@mui/material/Switch'
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { useRef, useState } from 'react'

const LeftMenu = ({picture}) => {
    const navigation = useNavigate()
    const user = localStorage.getItem('user')
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const on = useRef(false)

    const onSwitchChange = async () => {
        on.current = !on.current
        const URL = 'http://localhost:5000/valentines/'
        const user = localStorage.getItem('userId')
        const response = await fetch(URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "id": user,
                "checked": on.current,
            })
        })

        const responseJson = await response.json()
    }

    const deleteHandle = async () => {
        const URL = 'http://localhost:5000/user/'
        const userId = localStorage.getItem('userId')
        const user = localStorage.getItem('user')
        const response = await fetch(URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "id": userId,
                "user": user
            })
        })

        const responseJson = await response.json()
        if (responseJson.message === "200") [
            navigation('/')
        ]
    }

    return (
        <div className="Menu-Container">
            <div className="Boton-Container">
                <div className="Icon-container2" style={{ backgroundImage: `url(${twitter})` }} />
            </div>

            <div className="Boton-Container">
                <div className="Icon-container2" style={{ backgroundImage: `url(${casa})` }} />
                <p onClick={() =>{navigation("/home")}}>Inicio</p>
            </div>
            
            <div className="Boton-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${lupa})` }} />
                <p>Explorar</p>
            </div>
            
            <div className="Boton-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${campana})` }} />
                <p>Notificaciones</p>
            </div>
            
            <div className="Boton-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${mensaje})` }} />
                <p>Mensajes</p>
            </div>
            <div className="Boton-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${perfil})` }} />
                <p onClick={() =>{navigation("/profile")}}>Perfil</p>
            </div>
            <div className="Boton-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${opciones})` }} />
                <p>Más opciones</p>
            </div>

            <div className="Boton-Container" onClick={() => navigation('/analytics')}>
                <div className="Icon-container3A" style={{ backgroundImage: `url(${analisis})` }} />
                <p>Twitter Analytics</p>
            </div>
            <div className="Boton-Container">
                <button className="boton-tweet">
                    <p>Twittear</p>
                </button>
            </div>

            <div className="Boton-Container2">
                <div className="perfil-container">
                    <div className="image_profile" style={{ backgroundImage: `url(${picture})` }} />
                    <div className="perfil-p-container">
                        <div className="arroba"> {user}</div>

                        </div>
                </div>
                <div className='toggle-container'>
                    <div onClick={deleteHandle} className='delete-account'>Eliminar cuenta</div>
                </div>
            </div>



        </div>

    )
}

export default LeftMenu