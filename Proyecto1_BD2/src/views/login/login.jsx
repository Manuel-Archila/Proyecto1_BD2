import { useState } from 'react'
import './login.css'
import twitter from '../../assets/twitter.jpg'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()

    const modifyUser = (event) => {
        const value = event.target.value
        setUser(value)
    }

    const modifyPassword = (event) => {
        const value = event.target.value
        setPassword(value)
    }

    const authenticate = async() => {
        if (user === '' || password === '') {
            setError('Ingresa todos tus datos')
        }
        else {
            const URL = 'http://localhost:5000/userAuth/'
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    "username": user,
                    "password": password
                })
            })

            const responseJson = await response.json()
            console.log(responseJson)

            if (responseJson.message === "200") {
                localStorage.setItem('user', user)
                navigation('/home')
            }
            else if (responseJson.message === "401") {
                setError("Datos incorrectos")
            }
            else {
                setError("Oops algo salio mal")
            }
        }
    }

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
                            <p className='label-in'>Nombre de usuario</p>
                            <input value={user} className='input' type="text" name="usuario" placeholder="" onChange={modifyUser}/>
                        </div>
                        <div className='input-container'>
                            <p className='label-in'>Contraseña</p>  
                            <input value={password} className='input' type="password" name="password" placeholder="" onChange={modifyPassword}/>
                        </div>
                    </div>
                    {error && <div className='error'>{error}</div>}
                    <div className='button' onClick={authenticate}>
                        <p>Iniciar</p>
                    </div>
                </div>
                <div className='footer'>
                    <p>¿No tienes cuenta?</p>
                    <p onClick={() => navigation("/register")} className="registro">Regístrate</p>
                </div>
            </div>
        </div>
    )
}

export default Login
