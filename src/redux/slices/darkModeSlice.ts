import { createSlice } from "@reduxjs/toolkit";

type DarkModeStateType = {
    isDarkMode: boolean
}

const initialState: DarkModeStateType = {
    isDarkMode: false
}

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        setIsDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})

export const { setIsDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer