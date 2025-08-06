import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

const EditPage = () => {

     

    const location=useLocation()
   
  const[author,setAuthor]=useState(location.state.author);
  const [bookName,setBookName]=useState(location.state.bookName)

   const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
  
dispatch({bookName,author})

  };

    return (
        <div>
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
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        update 
      </button>
    </form>
    ); 
        </div>
    );
};

export default EditPage;