import React from "react";
// import Book from "./Book";
import CreateBookShelf from "./CreateBookShelf";

function BooksList ( {allbooks, updateBooksShelf}){

  const chosenBook = (updatedBook, newShelf) => {

    updateBooksShelf(updatedBook, newShelf)

  }

  const bookShelfNames = [
    {
      currentlyReading : "Currently Reading"
    },
    {
      wantToRead: "Want to Read"
    },
    {
      read: "Read"
    },
  ]
  
  return (
    <div className="list-books-content">
        <CreateBookShelf chosenBook={chosenBook} allbooks={allbooks} bookShelfNames={bookShelfNames}/>
    </div>
  )
}

export default BooksList;