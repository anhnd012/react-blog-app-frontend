import './post.css'
import { Link } from 'react-router-dom'


export default function Post({post}) {
    const PF = "http://localhost:7000/images/"
    return (
        <div className="post">
            <img src={PF + post.imgPost} alt="" className="imgPost"/>
            <div className="categoriesPost">
                {
                    post.categories.map((category) => {
                        return  <p className="category">{category}</p>
                    })
                }
            </div>
            <Link to={`/post/${post._id}`} className="link">
                <p className="title">{post.title}</p>
            </Link>
            <p className="time">{new Date(post.createdAt).toDateString()}</p>
            <p className="desc">{post.desc}</p>
        </div>
    )
}
