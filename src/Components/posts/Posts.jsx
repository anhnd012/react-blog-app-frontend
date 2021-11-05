import Post from '../post/Post'
import './posts.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router';
import { axiosInstance } from '../../config'


export default function Posts() {
    const [posts, setPosts] = useState([])
    const { search } = useLocation()
    console.log(search)
    useEffect(async () => {
        const res = await axios.get('/post/' + search);
        setPosts(res.data.posts)
    },[search])
    return (
        <div className="posts">
            {
                posts.map((post) => {
                    return <Post post={post}/>
                })
            }
        </div>
    )
}
