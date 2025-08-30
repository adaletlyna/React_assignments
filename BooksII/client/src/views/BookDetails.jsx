
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function BookDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:9999/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.log(err))
  }, [id])

  const handleBorrow = () => {
    axios.delete(`http://localhost:9999/api/books/${id}`)
      .then(() => navigate('/books'))
      .catch(() => alert('Failed to borrow (delete) book'))
  }

  return (
    <section>
      <h1>Book Details</h1>
      <div className="card">
        <div className="row"><span className="label">Title:</span> <span>{book.title}</span></div>
        <div className="row"><span className="label">Author:</span> <span>{book.author}</span></div>
        <div className="row"><span className="label">Pages:</span> <span>{book.pageCount}</span></div>
        <div className="row"><span className="label">Available:</span> <span>{book.available ? 'Yes' : 'No'}</span></div>
      </div>
      <button className="danger" onClick={handleBorrow}>Borrow</button>
    </section>
  )
}export default BookDetails
