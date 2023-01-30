import './LeftMenu.css'
import twitter from '../assets/twitter.jpg'

const LeftMenu = () => {
    return (
        <div className="Menu-Container">
        <div className="Boton-Container">
            <div className="Icon-container" style={{ backgroundImage: `url(${twitter})` }} />
            <p>Inicio</p>
        </div>
        </div>

    )
}

export default LeftMenu