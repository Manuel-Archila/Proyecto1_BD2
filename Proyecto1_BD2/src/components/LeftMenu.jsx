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









const LeftMenu = () => {
    return (
        <div className="Menu-Container">
            <div className="Boton-Container">
                <div className="Icon-container2" style={{ backgroundImage: `url(${twitter})` }} />
            </div>

            <div className="Boton-Container">
                <div className="Icon-container2" style={{ backgroundImage: `url(${casa})` }} />
                <text>Inicio</text>
            </div>
            
            <div className="Boton-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${lupa})` }} />
                <text>Explorar</text>
            </div>
            
            <div className="Boton-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${campana})` }} />
                <text>Notificaciones</text>
            </div>
            
            <div className="Boton-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${mensaje})` }} />
                <text>Mensajes</text>
            </div>
            <div className="Boton-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${perfil})` }} />
                <text>Perfil</text>
            </div>
            <div className="Boton-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${opciones})` }} />
                <text>Más opciones</text>
            </div>

            <div className="Boton-Container">
                <div className="Icon-container3" style={{ backgroundImage: `url(${analisis})` }} />
                <text>Twitter Analytics</text>
            </div>
            <div className="Boton-Container">
                <button className="boton-tweet">
                    <text>Twitear</text>
                </button>
            </div>

            <div className="Boton-Container">
                <div className="perfil-container">
                    <div className="image_profile" style={{ backgroundImage: `url(${foto})` }} />

                    <div className="perfil-text-container">
                        <text>Twitear</text>
                        <text>@Twitear</text>
                        </div>
                </div>
            </div>



        </div>

    )
}

export default LeftMenu