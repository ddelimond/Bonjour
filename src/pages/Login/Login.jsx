import { Link } from 'react-router-dom'
import './Login.scss'

const Login = () => {
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
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login