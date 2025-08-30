import { Link, NavLink } from 'react-router-dom'

function Header(){
  return (
    <header className="header">
      <Link to="/books" > Books</Link>
      <nav className="nav">
        <NavLink to="/books">All Books</NavLink>
        <NavLink to="/books/new">Add Book</NavLink>
      </nav>
    </header>
  )
}export default Header