import { NavLink } from "react-router";

function Home() {
  
  return (
    <>
      <p>Welcome </p>
      <NavLink to="/books">
        Go to books
    </NavLink>
    </>
  );
}

export default Home;