import { useState } from "react";
import type { Book } from "../types/Books";

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);


  return (
    <div className="books-list">
      <h1>Books</h1>
      

      {books.map((book: Book) => (
        <div key={book.id}> 
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  )
}
export default BookList;  