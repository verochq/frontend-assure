import BookList from "../components/BookList";
import {books} from "../data/books"

function Books() {
  return (
    <>
    <p>A book</p>
    <BookList books={books}/>
    </>
  );
}

export default Books;
 // 