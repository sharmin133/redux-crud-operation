import { configureStore } from "@reduxjs/toolkit";
import  booksReducer  from "../Features/Books/BookSlice";

const store =configureStore({
    reducer:{
        bookReducer:booksReducer
    }
})

export default store;