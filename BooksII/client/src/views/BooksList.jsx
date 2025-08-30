import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function BooksList() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9999/api/books')
      .then(res => setBooks(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <section>
      <h1>Library Catalog</h1>
      {books.length === 0 ? (
        <p>No books yet. <Link to="/books/new">Add the first one</Link>.</p>
      ) : (
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Available</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book._id}>
                  <td>
                    <Link to={`/books/${book._id}`}>{book.title}</Link>
                  </td>
                  <td>{book.author}</td>
                  <td>{book.pageCount}</td>
                  <td>{book.available ? 'Yes' : 'No'}</td>
                  <td>
                    <Link to={`/books/${book._id}`}>Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}