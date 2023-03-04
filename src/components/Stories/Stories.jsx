
import { stories } from '../dummyData/dummy'
import './Stories.scss'


const Stories = () => {
    return (
        <div className='storySection'>
            <div className='storiesContainer'>
                <div className='storyCard'>
                    <img src={''} alt="Story" />
                    <span></span>
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