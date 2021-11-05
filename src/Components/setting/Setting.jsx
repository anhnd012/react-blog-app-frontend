import './setting.css'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import axios from 'axios';
import { axiosInstance } from '../../config'

export default function Setting() {

    const { user, dispatch } = useContext(Context)
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword ] = useState("")

    useEffect(async ()=> {
        const res = await axios.get(`/user/${user.user._id}`)
        setUsername(res.data.user.username)
        setEmail(res.data.user.email)
        setPassword(res.data.user.password)
    },[])

    const handleSubmit = async(e)=> {
        e.preventDefault()
        const account = {
            username: username,
            email: email,
            password: password
        }
        dispatch({ type: "UPDATE_START"})
       if(file){
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append('name', filename)
            data.append("file", file)
            account.profilePic = filename
            try {
                await axios.post('/upload', data)
            }catch(err){
                console.log(err)
            }
       }
        try{
            const res = await axios.put(`/user/${user.user._id}`, account)
            dispatch({ type: "UPDATE_SUCCESS", payload:  res.data.updateUser})
            
        }catch(err){
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }
    return (
        <div className="setting">
            <div className="header-update-account">
                <p className="titleUpdate">Update Your Account</p>
                <p className="titleDelete">Delete Account</p>
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
                <p className = "titleProfile">Profile Picture</p>
                <div className="img-account-container">
                        <img src={file ?URL.createObjectURL(file): user.user.profilePic} alt=""  className="img-account"/> 
                    <label htmlFor="choose-img-account">
                        <i class="far fa-user-circle"></i>
                    </label>
                    <input type="file" className="choose-img-account" style={{display:"none"}} id="choose-img-account" onChange={(e)=>{setFile(e.target.files[0])}}/>
                </div>
                <p>Username</p>
                <input type="text" className="input"  value={username} onChange={(e)=> {setUsername(e.target.value)}}/>
                <p>Email</p>
                <input type="email" className="input" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                <p>Password</p>
                <input type="password" className="input" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
                <button className="btn-updateAccount" type="submit">Update</button>
            </form>
        </div>
    )
}
