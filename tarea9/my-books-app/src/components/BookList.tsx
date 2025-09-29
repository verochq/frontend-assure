import { use, useState } from "react";
import type { Book } from "../types/Books";
import { Link, NavLink } from "react-router";

type Books = {
  books: Book[]
}

function BookList({books}: Books) {
  const [bookss, setBooks] = useState<Book[]>(books);
  

  return (
    <div className="books-list">
      <h1>Books</h1>
      

      {bookss?.map((book: Book) => (
        <div key={book.id}> 
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <Link to={`/books/1`}>
            Details
          </Link>
        </div>
      ))}
    </div>
  )
}
export default BookList;  