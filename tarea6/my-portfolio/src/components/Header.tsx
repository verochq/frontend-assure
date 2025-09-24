type Props = {
  isStudent: boolean;
};

function Header({ isStudent }: Props) {
  return (
    <div className="header">
      <h1>Luz Chacon</h1>
      <h3>Frontend Developer in training</h3>
      <p>{isStudent ? "Student Portfolio" : "Portfolio"}</p>
    </div>
  );
}

export default Header;
