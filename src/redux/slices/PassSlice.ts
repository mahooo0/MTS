// redux/slices/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    blog: any;
    services: any;
    Currentservice: any;
    CurrentNew: any;
    CurrenVacansy: any;
}

const initialState: CounterState = {
    blog: {},
    services: {},
    CurrentNew: {},
    Currentservice: {},
    CurrenVacansy: {},
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1;
        // },
        // decrement: (state) => {
        //     state.value -= 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload;
        // },
        setBlog: (state, action: PayloadAction<any>) => {
            state.blog = action.payload;
        },
        setservices: (state, action: PayloadAction<any>) => {
            state.services = action.payload;
        },
        setcurrentservices: (state, action: PayloadAction<any>) => {
            state.Currentservice = action.payload;
        },
        setCurrentNew: (state, action: PayloadAction<any>) => {
            state.CurrentNew = action.payload;
        },
        setCurrenVacansy: (state, action: PayloadAction<any>) => {
            state.CurrenVacansy = action.payload;
        },
    },
});

export const {
    setBlog,
    setservices,
    setcurrentservices,
    setCurrentNew,
    setCurrenVacansy,
} = counterSlice.actions;
export default counterSlice.reducer;
