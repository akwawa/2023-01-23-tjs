import { createSlice } from '@reduxjs/toolkit';
import { ImageInterface, MemeInterface } from 'orsys-tjs-meme';

export interface ISliceListe {
    memes: Array<MemeInterface>
    images: Array<ImageInterface>
}

const initialState = {
    memes: [],
    images: []
}

const listes = createSlice({
    name: "listes",
    initialState,
    reducers: {
        addImage: (
            state: ISliceListe,
            action: { type: any, payload: ImageInterface }
        ) => {
            state.images.push(action.payload);
        }
    }
});

export const { addImage } = listes.actions;

export default listes.reducer;
