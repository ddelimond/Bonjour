import Activities from '../Activities/Activities'
import OnlineFriends from '../OnlineFriends/OnlineFriends'
import Suggestions from '../Suggestions/Suggestions'
import './RightSidebar.scss'

const RightSidebar = () => {
    return (
        <div className='rightBar'>
            <Suggestions />
            <Activities />
            <OnlineFriends />
        </div>
    )
}

export default RightSidebar