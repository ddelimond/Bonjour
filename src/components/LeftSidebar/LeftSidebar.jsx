
import { current } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { Friends, Groups, Marketplace, Watch, Memories, Events, Gaming, Gallery, Videos, Messages, Fundraiser, Tutorials, Courses, user } from '../../assets/assets'
import './LeftSidebar.scss'

const LeftSidebar = () => {

    const currentUser = useSelector(state => state.user.user)
    console.log(currentUser)

    return (
        <div className='leftBar'>
            <div className='container'>

                <div className='menu'>
                    <div className='userContainer'>
                        <img src={currentUser.img} />
                        <span>{currentUser.name}</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Friends} alt="Friends" />
                        <span>Friends</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Groups} alt="Groups" />
                        <span>Groups</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Marketplace} alt="Marketplace" />
                        <span>Marketplace</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Watch} alt="Watch" />
                        <span>Watch</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Memories} alt="Memories" />
                        <span>Memories</span>
                    </div>
                    <hr />
                </div>
                <div className='menu'>
                    <h5>Your Shortcuts</h5>
                    <div className='menuOption'>
                        <img src={Events} alt="Events" />
                        <span>Events</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Gaming} alt="Gaming" />
                        <span>Gaming</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Gallery} alt="Gallery" />
                        <span>Gallery</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Videos} alt="Videos" />
                        <span>Videos</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Messages} alt="Messages" />
                        <span>Messages</span>
                    </div>
                    <hr />
                </div>
                <div className='menu'>
                    <h5>Others</h5>
                    <div className='menuOption'>
                        <img src={Fundraiser} alt="Fundraiser" />
                        <span>Fundraiser</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Tutorials} alt="Tutorials" />
                        <span>Tutorials</span>
                    </div>
                    <div className='menuOption'>
                        <img src={Courses} alt="Courses" />
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar