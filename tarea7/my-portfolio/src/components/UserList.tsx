import { useState, useEffect } from 'react';

type Props = {
  id: number;
  name: string;
}

function UserList () {
  const [users, setUsers] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false)
      });
  }, [users]);

  return (
      <div className='users-container'>
      {loading ? <p>Loading...</p> : 
        <ul>
        {users?.map((user: Props) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      }
      </div>

  );
}

export default UserList;