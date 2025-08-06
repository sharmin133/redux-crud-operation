import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
  <nav className="bg-blue-600 text-white px-8 py-4">
  <div className="container mx-auto flex justify-around items-center">
    <div className="text-2xl font-bold">MySite</div>
    <div className="space-x-6">
   
      <Link to="/" className="hover:underline">Home</Link>
       <Link to="/show-books" className="hover:underline">Show Books</Link>
        <Link to="/add-book" className="hover:underline">Add Book</Link>
    </div>
  </div>
</nav>

    );
};

export default Navbar;