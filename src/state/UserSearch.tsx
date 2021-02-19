import React, { useState } from "react";

const users = [
  { name: "Sara", age: 20 },
  { name: "Bill", age: 20 },
  { name: "Kai", age: 5 },
];

interface User {
  name: string;
  age: number;
}

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  // The TS below will allow this piece of state to either be our defined object or undefined.
  const [user, setUser] = useState<undefined | User>(undefined);
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
