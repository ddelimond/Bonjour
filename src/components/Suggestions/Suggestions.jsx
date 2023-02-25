import { Link } from '@mui/icons-material'
import './Suggestions.scss'

const Suggestions = () => {
    return (
        <div className='suggestionContainer'>
            <h5>Suggestions For You</h5>
            <div className='suggestedFriendContainer'>
                <div className='friendInfo'>

                    <img src="https://images.unsplash.com/photo-1667661931030-198fb917bd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" />

                    <span>Jacob Williams</span>
                </div>
                <div className='btnContainer'>
                    <button className='follow'>follow</button>
                    <button className='dismiss'>dismiss</button>

                </div>
            </div>
            <div className='suggestedFriendContainer'>
                <div className='friendInfo'>
                    <img src="https://images.unsplash.com/photo-1668521429120-4befc2ac6acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80" />
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