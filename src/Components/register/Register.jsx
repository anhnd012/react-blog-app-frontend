import './register.css'
import{ useEffect, useRef} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../config'

export default function Register() {
    const userRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await axios.post('/user/register', {
                username: userRef.current.value, 
                email: emailRef.current.value, 
                password: passwordRef.current.value
            }).catch((err)=> {console.log(err)})
        }catch(err){
            console.log(err)
        }
    }
    
    return (
        <div className="register">
            <form className="registerForm" onSubmit={handleSubmit}>
                <p className="registerTitle">Register</p>
                <label>Username</label>
                <input type="text" placeholder="Enter your username" ref={userRef}/>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" ref={emailRef}/>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" ref={passwordRef}/>
                <button className="registerBtn" type="submit">Register</button>
            </form>
            <Link to="/login" className="link">
                <button className="loginRegisterBtn">Login</button>
            </Link>
        </div>
    )
}
