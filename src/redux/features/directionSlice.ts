import { createSlice } from '@reduxjs/toolkit';
import { SidebarMenu } from '../../data';


const initialState = {
    SidebarMenu
}

export const directionSlice = createSlice({
    name: "direction",
    initialState,
    reducers: {},
})

export const { } = directionSlice.actions;
export default directionSlice.reducer