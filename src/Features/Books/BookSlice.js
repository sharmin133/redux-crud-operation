import { createSlice } from "@reduxjs/toolkit";



const initialBooks={
    books:[
        {id:1, bookName:"love bangladesh", author:"Sharmin"},
        {id:2, bookName:"i donot hate bangladesh", author:"Shamima"},
        {id:3, bookName:"about bangladesh", author:"Nurislam"},
    ]
}



//add bookslice



export const booksSlice= createSlice({
    name:"books",
    initialState:initialBooks,
    reducers:{
        showBooks:(state)=>state,
        addBook:(state,action)=>{
            state.books.push(action.payload)
        },

        deleteBook:(state,action)=>{
            const id= action.payload
            state.books=state.books.filter((book)=>(book.id !==id))
        },
          updateBook:(state,action)=>{
            const {id, bookName, author}= action.payload
            const isExitingBook=state.books.filter((book)=>(book.id ===id))
            if(isExitingBook){
                isExitingBook[0].bookName=bookName;
                isExitingBook[0].author=author;
            }
        },
        

    }
})

export const {showBooks, addBook, deleteBook,updateBook}=booksSlice.actions;
export default booksSlice.reducer;