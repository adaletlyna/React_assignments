import { useState } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import BooksList from './views/BooksList.jsx'
import BookDetails from './views/BookDetails.jsx'
import AddBook from './views/AddBook.jsx'

import './App.css'


function App() {
  return (
    <div className="app">
     
      <Header />
     
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/books"/>} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/new" element={<AddBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
          
          
        </Routes>
      </div>
    </div>
  )
}

export default App
