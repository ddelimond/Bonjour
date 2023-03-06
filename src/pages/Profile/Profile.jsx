import './Profile.scss'
import Post from '../../components/Posts/Post'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const currentUser = useSelector(state => state.user.user);
    return (
        <div style={{ flex: 6 }} className='profile'>
            <img src="https://images.unsplash.com/photo-1545082461-7fc06d042f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <ProfileInfo />
            <Post />
        </div>
    )
}

export default Profile