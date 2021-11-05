import './write.css'
import { useState, useContext } from 'react'
import { Context } from '../context/Context'
import axios from 'axios'
import { axiosInstance } from '../../config'

export default function Write() {
    const [title, setTitle ] = useState("")
    const [desc, setDesc ] = useState("")
    const [ file, setFile ] = useState(null)
    const { user } = useContext(Context)
    const handleSubmit = async(e) => {
        e.preventDefault()
        const post = {
            author: user.user.username,
            title,
            desc
        }
        // console.log(file)
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename)
            data.append("file", file);
            post.imgPost = filename
            try {
                await axios.post('/upload', data)
            }catch(err){
                console.log(err)
            }
        }
        try{
            const res = await axios.post('/post/createPost', post)
            window.location.replace(`/post/${res.data.post._id}`)
        }catch(err){
            console.log(err)
        }
     }

    return (
        <div className="write">
            {
                file && (<img src={URL.createObjectURL(file)} alt="" className="writeImg"/>)
            }
             {/* <img src="https://images.unsplash.com/photo-1630630910992-46f7656ab211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80" alt="" className="writeImg"/> */}
            <form action="" className="writeFormGroup" onSubmit={handleSubmit}> 
                <label htmlFor="writeInputFile">
                    <i className="writeAddIcon fas fa-plus"></i>
                </label>
                <input type="file" id="writeInputFile" style={{display:"none"}} onChange= {(e) => { setFile(e.target.files[0])}}/>
                <input type="text" className="writeInput" placeholder="Title" autoFocus="true" onChange= {(e) => { setTitle(e.target.value)}}/>
                <textarea className="writeText writeInput" placeholder="Tell your story..." onChange= {(e) => { setDesc(e.target.value)}}></textarea>
                <button className="writeButton" type="submit">Publish</button>
            </form>

        </div>
    )
}
