import React, {useState, useEffect} from 'react'
// import BooksList from './BooksList'
import DisplayAllBooks from './DisplayAllBooks'
import Searching from './Searching'
import * as BooksAPI from './BooksAPI'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function  BooksApp (){

  const [allbooks, setAllBooks] = useState([])

  const [updatePage, setUpdatePage] = useState(false)
  
  useEffect(()=>{
    BooksAPI.getAll()
    .then((books) =>{
      setAllBooks(books)
    })

    return setUpdatePage(false)

  }, [updatePage])


  const updateBooksShelf = (updatedBook, newShelf) =>{

    BooksAPI.update(updatedBook, newShelf)
    .then(BooksAPI.getAll()
    .then((books) =>{
      setAllBooks(books)
    }))
    

    setUpdatePage(true)
  }

  return (
    <div className="app">
      <Routes>
        <Route exact path="/search" element={<Searching allbooks = {allbooks} updateBooksShelf = {updateBooksShelf}/>} />
        <Route exact path="/" element={<DisplayAllBooks allbooks = {allbooks} updateBooksShelf = {updateBooksShelf}/>}  />
      </Routes>
    </div>
  )
}

export default BooksApp
