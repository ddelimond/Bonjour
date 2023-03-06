import { useSelector } from 'react-redux'
import './Comments.scss'

const Comments = () => {

    const currentUser = useSelector((state) => state.user.user)


    const comments = [
        {
            id: 1,
            name: 'Raven Charles',
            profilePic: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam hic rem recusandae, voluptatum vitae inventore vel nulla necessitatibus provident!'
        },
        {
            id: 2,
            name: 'Chris Adkins',
            profilePic: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam hic rem recusandae, voluptatum vitae inventore vel nulla necessitatibus provident!'
        },

    ]
    return (
        <div className='comments'>
            <div className='postComment'>
                <img src={currentUser.img} alt="" />

                <input type="text" placeholder='write a comment...' />
                <button>Comment</button>

            </div>
            {comments.map((comment) => (
                <div className='comment'>
                    <img src={comment.profilePic} alt="" />
                    <div className='info'>
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments