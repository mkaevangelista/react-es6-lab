import React from 'react';

function UserList({ users }) {
  return (
    <div>
      {users.map(user => <p key={user}>{user}</p>)}
    </div>
  );
}

export default UserList;
