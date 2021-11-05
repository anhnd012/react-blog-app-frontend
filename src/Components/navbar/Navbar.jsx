import './navbar.css'
import { Link } from "react-router-dom"
import { useEffect, useContext } from 'react'
import { Context } from '../context/Context'


export default function Navbar() {
    const {user, dispatch } = useContext(Context);
    const PF = "http://localhost:7000/images/"
   const handleLogout = () => {
        dispatch({ type: "LOGOUT"})
        window.location.replace('/login')
   }
    return (
        <header className="navbar">
            <div className="topLeft">
                <i class="topLeftItems fab fa-facebook-square"></i>
                <i class="topLeftItems fab fa-instagram-square"></i>
                <i class="topLeftItems fab fa-pinterest-square"></i>
                <i class="topLeftItems fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className = "Navbar-Items">
                    <Link to="/" className="link">
                        <li className="Item">HOME</li>
                    </Link>
                    <Link to="/about" className="link">
                        <li className="Item">ABOUT</li>
                    </Link>
                    <Link to="/contact" className="link">
                         <li className="Item">CONTACT</li>
                    </Link>
                    <Link to="/write" className="link">
                        <li className="Item">WRITE</li>
                    </Link>
                    <Link to="/login" className="link">
                        <li className="Item">{user ?"" : "LOGIN"}</li>
                    </Link>

                    <li className="Item" onClick={handleLogout}>
                    {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                       <Link to="/settings">
                             <img className="navbar-img" src={PF + user.user.profilePic} alt="" />
                       </Link>
                    ):(
                        // <img className="navbar-img" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <></>
                    )
                }
                <i class="topSearchIcon fas fa-search"></i>   
               
            </div>
        </header>
    )
}
