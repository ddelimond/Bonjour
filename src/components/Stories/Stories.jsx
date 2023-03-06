
import { useSelector } from 'react-redux'
import { stories } from '../dummyData/dummy'
import AddIcon from '@mui/icons-material/Add';
import './Stories.scss'


const Stories = () => {
    let currentUser = useSelector(state => state.user.user);
    return (
        <div className='storySection'>
            <div className='storiesContainer'>
                <div className='storyCard'>
                    <img src={currentUser.img} alt={`${currentUser.name} Story`} />
                    <button className='addPost'><AddIcon /></button>
                    <span>{currentUser.name}</span>
                </div>
                {stories.map(story => {
                    return <div key={story.id} className='storyCard'>
                        <img src={story.img} alt="Story" />
                        <span>{story.user}</span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Stories