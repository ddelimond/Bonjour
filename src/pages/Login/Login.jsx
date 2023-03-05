import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginAuth } from '../../redux/userSlice'
import './Login.scss'

const Login = () => {

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(loginAuth())
    }


    return (
        <div className='login'>
            <div className='card'>
                <div className="leftLogin">
                    <h1>Sign Up!</h1>
                    <p>Connect with friends and others around the would you,creating relationships that could last a life time, never miss a moment or memory.</p>
                    <span>Don't have an account</span>
                    <Link to='/register'>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="rightLogin">
                    <h1>Login</h1>
                    <form action="/login" method='GET'>
                        <input type="email" name="username" placeholder='Username' />
                        <input type="password" name='password' placeholder='Password' />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login