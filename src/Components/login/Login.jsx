import './login.css'
import { useRef, useContext} from 'react'
import { Context } from '../context/Context'
import axios from 'axios'
import { axiosInstance } from '../../config'
import { Link } from 'react-router-dom'

export default function Login() {
    const userRef = useRef()
    const passwordRef = useRef()
    const { user, dispatch } = useContext(Context)
    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({ type: "LOGIN_START"});
        try {
            const login = await axios.post('/user/login', { 
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            // dispatch({ type: "LOGIN_SUCCESS"});
            // console.log(user)
            login && window.location.replace('/')
            dispatch({ type: "LOGIN_SUCCESS", payload: login.data})
        }catch(err){
            dispatch({ type: "LOGIN_FAILURE"})
        }
    }
    return (
        <div className="login">
            <form className="loginForm" onSubmit = {handleSubmit}>
                <p className="loginTitle">Login</p>
                <label>Username</label>
                <input type="text" placeholder="Enter your username" ref={userRef}/>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" ref={passwordRef}/>
                <button className="loginBtn" type="submit">Login</button>
            </form>
           <Link to="/register">
            <button className="registerLoginBtn">Register</button>
           </Link>
        </div>
    )
}
