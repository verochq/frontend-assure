type Props = {
  name: string;
  age: number;
  onClick: () => void;
};

function UserCard({ name, age, onClick }: Props) {
  return (
    <div className="user-card">
      <p>{name}</p>
      <p>Age: {age}</p>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default UserCard;
