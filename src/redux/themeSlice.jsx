import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: 'theme-light' }

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => { }
    }
})