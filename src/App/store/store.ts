import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import listeReducer, { addImage } from './listes';
import currentReducer from './current';

// export const uneValeurASupprimerApres = "";

export const store = configureStore(
    {
        reducer: combineReducers({
            listes: listeReducer,
            current: currentReducer
        }),
        devTools: true,
    }
);

// console.log(store.getState());
// const tmpAction = addImage({ "id": 2, "url": "think.bmp", "w": 675, "h": 380, "name": "Think" });
// store.dispatch(tmpAction);
// console.log(store.getState());
