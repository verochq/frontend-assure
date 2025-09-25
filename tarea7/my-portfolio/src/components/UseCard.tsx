type Props = {
  name: string;
  age: number;
  onClick: () => void;
};

function UserCard({ name, age, onClick }: Props) {
  return (
    <div className="use-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default UserCard;
