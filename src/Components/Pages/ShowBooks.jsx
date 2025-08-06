import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../../Features/Books/BookSlice';
import { Link } from 'react-router';

const ShowBooks = () => {

    const books=useSelector((state)=>state.bookReducer.books)
    // console.log(books)
     const dispatch=useDispatch()
    const handleDeleteBook=(id)=>{
       dispatch(deleteBook(id))
    }


    return (
        <div>
            <h1>Show all books</h1>
           <table className='table-auto border border-gray-400 w-2/3'>
  <thead>
    <tr>
      <th className="border border-gray-400 px-4 py-2">Id</th>
      <th className="border border-gray-400 px-4 py-2">BookName</th>
      <th className="border border-gray-400 px-4 py-2">Author</th>
      <th className="border border-gray-400 px-4 py-2">Actions</th>
    </tr>
  </thead>

  <tbody>
    {
      books && books.map((book) => {
        const { id, bookName, author } = book;
        return (
          <tr key={id}>
            <td className="border border-gray-400 px-4 py-2">{id}</td>
            <td className="border border-gray-400 px-4 py-2">{bookName}</td>
            <td className="border border-gray-400 px-4 py-2">{author}</td>
            <td className="border border-gray-400 px-4 py-2">
              <div className='flex gap-2'>
                <Link to="/edit-page"state={{id, author,bookName}} >
                
                <button className="bg-blue-500 text-white px-2 py-1 rounded" >Edit</button>
                </Link>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={()=>{handleDeleteBook(id)}} >Delete</button>
              </div>
            </td>
          </tr>
        );
      })
    }
  </tbody>
</table>




        </div>
    );
};

export default ShowBooks;