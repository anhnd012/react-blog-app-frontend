import './profile.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../config'

export default function Profile() {
    const [categories, setCategories ] = useState([]);
    useEffect(async () => {
        const res = await axios.get('/category/getAll');
        setCategories(res.data.categories)
        
    },[])
    return (
        // <div className="profile">profile</div>
        <div className="profile">
            <div className="AboutMe">
                <hr />
                <span className="textAboutMe">ABOUT ME</span>
                <hr />
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" className="profilePic"alt="" />
                <p className="textLoremAboutMe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia praesentium animi modi, similique ab corporis alias necessitatibus ipsam placeat repellendus.</p>
            </div>
            <div className="Categories">
                <p>CATEGORIES</p>
                <ul className="categoriesItems">
                    {
                        categories.map((category) => {
                            return  <Link className="link" to={`?catName=${category.name}`}>
                                <li className="categoriesItem">{category.name}</li>
                            </Link>
                        })
                    }
                </ul>
            </div> 
            <div className="FollowUs">
                <p>Follow Us</p>
                <div className="FollowUsIcons">
                    <i class="FollowUsIcon fab fa-facebook-square"></i>
                    <i class="FollowUsIcon fab fa-instagram-square"></i>
                    <i class="FollowUsIcon fab fa-pinterest-square"></i>
                    <i class="FollowUsIcon fab fa-twitter-square"></i>
                </div>
            </div>   
        </div>
    )
}
