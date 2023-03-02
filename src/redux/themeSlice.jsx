import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: JSON.parse(localStorage.getItem('theme-dark')) ? 'theme-dark' : 'theme-light' }

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {

            if (JSON.parse(localStorage.getItem('theme-dark')) === false) {
                localStorage.setItem('theme-dark', 'true');
                state.theme = 'theme-dark';
            } else if (JSON.parse(localStorage.getItem('theme-dark')) === true) {
                localStorage.setItem('theme-dark', 'false');
                state.theme = 'theme-light';
            }

        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer