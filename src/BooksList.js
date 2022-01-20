import React from "react";
import Book from "./Book";

function BooksList ( {allbooks, updateBooksShelf}){

  const chosenBook = (updatedBook, newShelf) => {

    updateBooksShelf(updatedBook, newShelf)

  }
  
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            Currently Reading
          </h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {allbooks.filter(book=>book.shelf==="currentlyReading").map(book => <Book book={book} chosenBook={chosenBook} key = {book.id}/>)}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            Want to Read
          </h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {allbooks.filter(book=>book.shelf==="wantToRead").map(book => <Book book={book} chosenBook={chosenBook} key = {book.id}/>)}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">
            Read
          </h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {allbooks.filter(book=>book.shelf==="read").map(book => <Book book={book} chosenBook={chosenBook} key = {book.id}/>)}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BooksList;