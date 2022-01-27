import React from "react";

function Book ( {book, chosenBook} ){

  const handleChange = (e) => {
    
    let newShelf = e.target.value;
    let selectedBook = book;

    chosenBook(selectedBook, newShelf)

  }
  
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks!==undefined ? book.imageLinks.smallThumbnail : ""}")` }}>
          {/* <div className="book-cover" style={{ width: 128, height: 193}}> */}
          </div>
          <div className="book-shelf-changer">
            <select onChange={handleChange} defaultValue = {book.shelf===undefined ? "none" : book.shelf}>
              <option value="move" disabled >Move to...</option>
              <option value="currentlyReading" >Currently Reading</option>
              <option value="wantToRead">Want To Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{!book.authors ? "" : book.authors.join(" , ")}</div>
      </div>
    </li>
  )
}

export default Book;


