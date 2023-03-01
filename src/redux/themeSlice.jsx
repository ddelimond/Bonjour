import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: 'theme-light' }

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            JSON.parse(localStorage.getItem('theme-dark')) ? state.theme = 'theme-dark' : state.theme = 'theme-light'
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer