import { configureStore } from "@reduxjs/toolkit";
import { user } from "../assets/assets";
import themeReducer from "./themeSlice";
import userReducer from './userSlice'


export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,

    }
}) 