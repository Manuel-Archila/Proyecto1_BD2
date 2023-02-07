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


const LeftMenu = ({picture}) => {
    const navigation = useNavigate()
    const user = localStorage.getItem('user')





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

            <div className="Boton-Container">
                <div className="Icon-container3" style={{ backgroundImage: `url(${analisis})` }} />
                <p>Twitter Analytics</p>
            </div>
            <div className="Boton-Container">
                <button className="boton-tweet">
                    <p>Twitear</p>
                </button>
            </div>

            <div className="Boton-Container">
                <div className="perfil-container">
                    <div className="image_profile" style={{ backgroundImage: `url(${picture})` }} />

                    <div className="perfil-p-container">
                        <div className="arroba"> {user}</div>

                        </div>
                </div>
            </div>



        </div>

    )
}

export default LeftMenu