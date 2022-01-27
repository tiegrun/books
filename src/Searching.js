import React, { useState } from "react";
import Book from "./Book";
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

function Searching ({updateBooksShelf, booksInShelf}){

  const [allBooks, setAllBooks] = useState([]);
  const [searchBarText, setSearchBarText] = useState("")


  const chosenBookChangeStatus = (updatedBook, newShelf) => {

    updateBooksShelf(updatedBook, newShelf)

  }

  const getSearchText = (text) =>{

    let typedText = text;

    setSearchBarText(typedText)
    
    if(typedText!==""){
      BooksAPI.search(typedText, 10)
      .then(books=>books!==""  && books !== undefined && !books.error ? setAllBooks(books): setAllBooks(allBooks))
    }
  }

  const updateSearchedBooks = allBooks.map(book =>{
    booksInShelf.map(bookInShelf => {
      if (bookInShelf.id === book.id) {
        book.shelf = bookInShelf.shelf;
      }
      return bookInShelf;
    });
    return book;
  })
  

  let showBooksByTitleAndByAuthor = searchBarText !== "" ? updateSearchedBooks.filter(book=> {
           return (book.title.toLowerCase().includes(searchBarText) || (!book.authors || !book.imageLinks ? console.log("unknown")  : book.authors.toString().toLowerCase().includes      (searchBarText)))
          }) : allBooks.filter(book=>!book)


  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange = {(e)=>getSearchText(e.target.value)} value = {searchBarText}/>
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
