import { useNavigate, useParams } from "react-router";
import { books } from "../data/books";
import { useEffect } from "react";

function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === id);

  useEffect(() => {
    if (!book) {
      navigate("/404");
    }
  }, [book, navigate]);
 

  return (
    <div>
      <h1>Book Detail</h1>
      {book ? <p>{book?.title}</p> : <p>Not found</p>}
    </div>
  );
}

export default BookDetail;
