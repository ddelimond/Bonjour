import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';
import { posts } from '../dummyData/dummy';
import './Post.scss'
import Comments from '../Comments/Comments';
import { useState } from 'react';


const Post = () => {

    let liked = true;
    const [openComments, setOpenComments] = useState(false);

    return (
        <div className='postContainer'>
            {posts.map((post) =>
                <div className='post' key={post.id}>
                    <div className='posterInfo'>
                        <div className='posterInfoLeftSide'>
                            <div className='posterProfileImg'>
                                <img src={post.profilePic} alt={`${post.userName}'s Profile Img`} />
                            </div>
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className='posterNameAndPostTime'>
                                    <span className='posterName'>{post.userName}</span>
                                    <span className='postTime'>{post.createDate}</span>
                                </div>
                            </Link>
                        </div>
                        <span className='edit'>...</span>
                    </div>
                    <p className='caption'>{post.caption}</p>
                    <div className='contentContainer'>
                        <img className='content' src={post.contentImg} alt={`${post.userName}'s content image`} />
                    </div>
                    <div className='interactionContainer'>
                        <div className='interactions'>
                            {liked ? <  FavoriteOutlinedIcon /> : <FavoriteBorderIcon />}
                            <span>Likes</span>
                        </div>
                        <div className='interactions' onClick={() => setOpenComments(!openComments)}>
                            <SmsOutlinedIcon />
                            <span>Comments</span>
                        </div>
                        <div className='interactions'>
                            <ShareIcon />
                            <span>Share</span>
                        </div>
                    </div>
                    {openComments && <Comments />}
                </div>
            )}
        </div>
    )
}

export default Post