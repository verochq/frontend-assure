import React, { Component } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

const users = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Doe", age: 25 },
  { id: 3, name: "Bob Smith", age: 35 },
];

function UserList({ user }: User) {
  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};


componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          users: data,
          loading: false,
        })
      );
  }

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default UserList;
