import { createSlice } from '@reduxjs/toolkit'
import { MemeInterface } from 'orsys-tjs-meme';
import { DummyMeme } from '../interfaces/dummyMeme';

const initialState:MemeInterface = {
    ...DummyMeme
}

const current = createSlice({
    name: "current",
    initialState,
    reducers: {
        updateCurrent: (
            state: MemeInterface,
            action: { type: string, payload: MemeInterface }
        ) => {
            // state=action.payload;
            Object.assign(state, action.payload);
        },
        clearCurrent: (
            state: MemeInterface
        ) => {
            // state={...DummyMeme};
            Object.assign(state, DummyMeme);
        }
    }
});


export const { updateCurrent, clearCurrent } = current.actions

export default current.reducer
