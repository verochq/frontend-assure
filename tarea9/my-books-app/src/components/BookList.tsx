import type { Book } from "../types/Books";
import { Link} from "react-router";

type Books = {
  books: Book[]
}

function BookList({books}: Books) {
  

  return (
    <div className="books-list">
      <h1>Books</h1>
      

      {books?.map((book: Book) => (
        <div key={book.id}> 
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <Link to={`/books/${book.id}`}>
            Details
          </Link>
        </div>
      ))}
    </div>
  )
}
export default BookList;  