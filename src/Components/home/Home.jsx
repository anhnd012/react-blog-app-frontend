import './home.css'
import Imagepage from '../ImagePage/Imagepage'
import Profile from '../profile/Profile'
import Posts from '../posts/Posts'

export default function Home() {
    return (
        <div>
            <Imagepage/>
            <div className="home">
                    <Posts/>
                    <Profile/>
            </div>
        </div>
    )
}
