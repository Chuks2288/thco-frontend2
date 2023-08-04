import { configureStore } from '@reduxjs/toolkit';
import SidebarReducer from './features/SidebarSlice';
import directionReducer from './features/directionSlice';


export const store = configureStore({
    reducer: {
        sidebar: SidebarReducer,
        direction: directionReducer,
    }
})