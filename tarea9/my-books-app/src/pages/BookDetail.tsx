import { useParams } from "react-router";
import { books } from "../data/books";

function BookDetail() {
  let params = useParams();

 const isBook = books.some((book)=>{return book.id == params.id});
 const book = books.find((book)=>{return book.id === "1"});

  return (
    <div>
      <h1>Book Detail</h1>
      {isBook ? <p>{book?.title}</p> : <p>Not found</p>}
    </div>
  )
}

export default BookDetail;
