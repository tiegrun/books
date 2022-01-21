import React, { useState } from "react";
import Book from "./Book";
import { Link } from 'react-router-dom'

function Searching ({allbooks, updateBooksShelf}){

  const [searchBarText, setSearchBarText] = useState("")

  const chosenBookChangeStatus = (updatedBook, newShelf) => {

    updateBooksShelf(updatedBook, newShelf)

  }

  const getSearchText = (e) =>{

    let typedText = e.target.value.toLowerCase();

    setSearchBarText(typedText)
    
  }
  
  let showBooksByTitleAndByAuthor = searchBarText !== "" ? 
    allbooks.filter(book=> {
    return (book.title.toLowerCase().includes(searchBarText) || book.authors.toString().toLowerCase().includes(searchBarText))}) : 
    allbooks.filter(book=>!book)

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange = {getSearchText} value = {searchBarText}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showBooksByTitleAndByAuthor.map(book => <Book book={book} chosenBook={chosenBookChangeStatus} key={book.id}/>)}
        </ol>
      </div>
    </div>
  )
}

export default Searching;
