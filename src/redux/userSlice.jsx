import { createSlice } from "@reduxjs/toolkit/dist";
import { useState } from "react";


const userSlice = createSlice({
    name: 'currentUser',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
    },
    reducers: {
        loginAuth: (state) => {
            let currentUser = state.user

            currentUser ? currentUser : currentUser = { id: 1, name: 'John Doe', img: 'https://images.unsplash.com/photo-1674231749604-d915baa7df9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0Mnx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' };

            state.user = JSON.stringify(localStorage.setItem('user', currentUser))

        }

    }
})


export const { loginAuth } = userSlice.actions


export default userSlice.reducer
