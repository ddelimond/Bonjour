import { Link } from '@mui/icons-material'
import './Suggestions.scss'

const Suggestions = () => {
    return (
        <div className='suggestionContainer'>
            <h5>Suggestions For You</h5>
            <div className='suggestedFriendContainer'>
                <div className='friendInfo'>

                    <img src="https://images.unsplash.com/photo-1675796483705-ba3ec74df7dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />

                    <span>Jacob Williams</span>
                </div>
                <div className='btnContainer'>
                    <button className='follow'>follow</button>
                    <button className='dismiss'>dismiss</button>

                </div>
            </div>
            <div className='suggestedFriendContainer'>
                <div className='friendInfo'>
                    <img src="https://images.unsplash.com/photo-1674078118401-c6337f6d6330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="user profile img" />
                    <span>Lisa Bailey</span>
                </div>
                <div className='btnContainer'>
                    <button className='follow'>follow</button>
                    <button className='dismiss'>dismiss</button>
                </div>
            </div>
        </div>
    )
}

export default Suggestions