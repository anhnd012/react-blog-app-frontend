import './singlePost.css'
import axios from 'axios'
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react'
import { axiosInstance } from '../../config'

export default function SinglePost() {
    const PF = "http://localhost:7000/images/"
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    useEffect(async ()=> {
        const res = await axios.get(`/post/${id}`);
        setPost(res.data.post);
        setTitle(res.data.post.title);
        setDesc(res.data.post.desc);
    },[])
    const handleDeletePost = async ()=>{
        try {
            await axios.delete(`/post/${id}`)
            window.location.replace('/')
        }catch(err){
            console.log(err)
        }
    }

    const handleUpdate = async () => {
        await axios.put(`/post/${id}`, { title, desc})
        window.location.replace('/')
    }
    return (
        <div className="singlePost">
            {
                post.imgPost && (<img src={PF +post.imgPost} alt="" className="imgSinglePost" />)
            }{
                updateMode ? <input type="text"  value={title} className="singlePostTitleInput" autoFocus onChange={(e) => {setTitle(e.target.value)}}/> : (
                <h1 className="titleSinglePost">{post.title}
                <div className="singlePostEdit">
                    <i class="singlePostIcon far fa-edit" onClick={() => {setUpdateMode(true)}}></i>
                    <i class="singlePostIcon fas fa-trash-alt" onClick={handleDeletePost}></i>
                </div>
            </h1>
                )
            }
            <div className="singlePostInfo">
                <p className="singlePostAuthor">Author: {post.author}</p>
                <p className="singlePostDate">{new Date(post.createdAt).toDateString()}</p>
            </div>
            { updateMode ? <textarea  className="singlePostDescInput" value={desc} onChange={(e)=> {setDesc(e.target.value)}}/>:
            (<p className="singlePostDesc">{post.desc}</p>)
            }
            {
                updateMode && (<button className="singlePostButton" onClick={handleUpdate}>Update</button>)
            }
        </div>
    )
}
