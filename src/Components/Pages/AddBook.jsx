import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../Features/Books/BookSlice';

const AddBook = () => {

    const numberOfBooks=useSelector((state)=>state.bookReducer.books.length)

    const dispatch=useDispatch()
  const[author,setAuthor]=useState();
  const [bookName,setBookName]=useState()


  const handleSubmit = (e) => {
    e.preventDefault();
  
const book={id:numberOfBooks, bookName, author}
    dispatch(addBook(book))

  };
    return (
         <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto  p-6 shadow-md rounded space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">Author<span className="text-red-500">*</span></label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          required
          className="w-full border border-gray-300 px-3 py-2 rounded"
          placeholder="Enter author's name"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Book Name<span className="text-red-500">*</span></label>
        <input
          type="text"
          name="bookName"
          value={bookName}
          onChange={(e)=>setBookName(e.target.value)}
          required
          className="w-full border border-gray-300 px-3 py-2 rounded"
          placeholder="Enter book name"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </form>
    );
};

export default AddBook;