import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function UpdateBook() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pageCount, setPageCount] = useState('')
  const [available, setAvailable] = useState(false)
  const [errors, setErrors] = useState({})

  // Pre-populate the form
  useEffect(() => {
    axios.get(`http://localhost:9999/api/books/${id}`)
      .then(res => {
        setTitle(res.data.title)
        setAuthor(res.data.author)
        setPageCount(res.data.pageCount)
        setAvailable(res.data.available)
      })
      .catch(err => console.log(err))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { title, author, pageCount: Number(pageCount), available }

    axios.put(`http://localhost:9999/api/books/${id}`, payload)
      .then(() => navigate('/books'))
      .catch(err => {
        if (err.response?.data?.errors) {
          setErrors(err.response.data.errors)
        } else {
          console.log(err)
        }
      })
  }

  return (
    <section>
      <h1>Update Book</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Title
          <input value={title} onChange={e => setTitle(e.target.value)} />
          {errors.title && <p className="error">{errors.title.message}</p>}
        </label>
        <label>
          Author
          <input value={author} onChange={e => setAuthor(e.target.value)} />
          {errors.author && <p className="error">{errors.author.message}</p>}
        </label>
        <label>
          Pages
          <input 
            type="number" 
            min="1" 
            value={pageCount} 
            onChange={e => setPageCount(e.target.value)} 
          />
          {errors.pageCount && <p className="error">{errors.pageCount.message}</p>}
        </label>
        <label className="checkbox">
          <input 
            type="checkbox" 
            checked={available} 
            onChange={e => setAvailable(e.target.checked)} 
          />
          Available now
        </label>
        <div className="actions">
          <button type="submit">Update</button>
        </div>
      </form>
    </section>
  )
}
