import { NavLink } from "react-router";
import BookList from "../components/BookList";
import {books} from "../data/books"

function Books() {
  return (
    <>
    <p>A book</p>
    <NavLink to="/">
        Go home
      </NavLink>
    <BookList books={books}/>

    </>
  );
}

export default Books;
 // 