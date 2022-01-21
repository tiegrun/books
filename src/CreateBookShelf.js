import React from "react";
import Book from "./Book";

function CreateBookShelf ({chosenBook, allbooks, bookShelfNames}){
  
  return (
    <div>
      {bookShelfNames.map(bookShelfName=>(
        <div className="bookshelf" key={bookShelfNames.indexOf(bookShelfName)}>
          <h2 className="bookshelf-title">
            {Object.values(bookShelfName).toString()}
          </h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {allbooks.filter(book=>book.shelf===Object.keys(bookShelfName).toString()).map(book => <Book book={book} chosenBook={chosenBook} key={book.id} bookShelfNames={bookShelfNames}/>)}
            </ol>
          </div>
        </div> 
        ) 
      )}
    </div>
  )
}

export default CreateBookShelf;