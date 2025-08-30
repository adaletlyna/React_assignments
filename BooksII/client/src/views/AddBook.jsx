import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddBook() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pageCount, setPageCount] = useState('')
  const [available, setAvailable] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { title, author, pageCount: Number(pageCount), available }
    axios.post('http://localhost:9999/api/books', payload)
      .then(() => navigate('/books'))
      .catch(err => console.log(err))
  }

  return (
    <section>
      <h1>Add a New Book</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Title
          <input value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Author
          <input value={author} onChange={e => setAuthor(e.target.value)} />
        </label>
        <label>
          Pages
          <input type="number" min="1" value={pageCount} onChange={e => setPageCount(e.target.value)} />
        </label>
        <label className="checkbox">
          <input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />
          Available now
        </label>
        <div className="actions">
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  )
}export default AddBook
