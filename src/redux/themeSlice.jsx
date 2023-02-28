import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: 'theme-light' }

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.theme === 'theme-light' ? state.theme = 'theme-dark' : state.theme = 'theme-light'
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer