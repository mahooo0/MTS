import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterReducer from './slices/PassSlice'; // Import your slice here

// Create the store with configureStore from Redux Toolkit
export const store = configureStore({
    reducer: {
        counter: counterReducer, // Register the slice reducer here
        // You can add more reducers (slices) here if you have multiple slices
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

// Types for TypeScript
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Custom hook to use dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
