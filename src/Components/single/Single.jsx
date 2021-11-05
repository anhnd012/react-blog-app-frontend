import Profile from '../profile/Profile'
import SinglePost from '../singlePost/SinglePost'
import './single.css'

export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Profile/>
        </div>
    )
}
