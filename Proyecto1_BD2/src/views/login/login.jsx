import { useState } from 'react'
import './login.css'
import twitter from '../../assets/twitter.jpg'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigation = useNavigate()

    return (
        <div className="container">
            <div className="login-container">
                <div className='logo-container'>
                    <img className='logo' src={twitter} />
                </div>
                <div className='inputs-container'>
                    <div className='inputs'>
                        <p className='header'>Inicia sesión en Twitter</p>
                        <div className='input-container'>
                            <p>Nombre de usuario</p>
                            <input className='input' type="text" name="usuario" placeholder="" />
                        </div>
                        <div className='input-container'>
                            <p>Contraseña</p>  
                            <input className='input' type="password" name="password" placeholder=""/>
                        </div>
                    </div>
                    <div className='button' onClick={() => navigation("/home")}>
                        <p>Iniciar</p>
                    </div>
                </div>
                <div className='footer'>
                    <p>¿No tienes cuenta?</p>
                    <p onClick={() => navigation("/registro")} className="registro">Regístrate</p>
                </div>
            </div>
        </div>
    )
}

export default Login
