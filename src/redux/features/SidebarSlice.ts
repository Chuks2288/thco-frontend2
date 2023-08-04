import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    drawer: false
}


export const SidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleDrawer: (state) => {
            state.drawer = !state.drawer
        },
        showDrawer: (state) => {
            state.drawer = true
        },
        hideDrawer: (state) => {
            state.drawer = false
        },
    }
})

export const { toggleDrawer, hideDrawer, showDrawer } = SidebarSlice.actions;
export default SidebarSlice.reducer
