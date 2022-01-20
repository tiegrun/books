import React from "react";
import BooksList from './BooksList'
import { Link } from 'react-router-dom'

function DisplayAllBooks ({ allbooks, updateBooksShelf }){

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>
          MyReads
        </h1>
      </div>
      <BooksList allbooks = {allbooks} updateBooksShelf = {updateBooksShelf}/>
      <div className="open-search">
        <Link to="/search">
          Add a book
        </Link>
      </div>
    </div>
  )
}


export default DisplayAllBooks;
