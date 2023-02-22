import { Link } from 'react-router-dom'
import './Register.scss'

const Register = () => {
    return (
        <div className='login'>
            <div className='card'>
                <div className="leftRegister">
                    <h1>Register</h1>
                    <form action="/register" method='POST'>
                        <input type="text" name="username" placeholder='Username' />
                        <input type="password" name='password' placeholder='Password' />
                        <input type="email" name="email" placeholder='Email' />
                        <input type="text" name="name" placeholder='Name' />
                        <button>Register</button>
                    </form>
                </div>
                <div className="rightRegister">
                    <h1>Bonjour!</h1>
                    <p>Want to meet and mingle with new people ? Connect with friends and others around the world.No String attach an account is completly <b>FREE</b> What are you waiting for, sign up!</p>
                    <span>Already have an Accout ?</span>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register