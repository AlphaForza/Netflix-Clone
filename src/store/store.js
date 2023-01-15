import { configureStore } from "@reduxjs/toolkit";
import movie_Slice from "./movieSlice"


export const store = configureStore({
    reducer: {
            movieData : movie_Slice
    }
})

export default store;
