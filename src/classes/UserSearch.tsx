import React, { Component } from "react";

// The interface below tells TS that UserSearchProps should be an array of objects, with each object
// having a name, that is a number, and an age, that is a string.
interface UserSearchProps {
  users: User[];
}

// Interface for our UserSearch State.
interface UserSearchState {
  name: string;
  user: User | undefined;
}

interface User {
  name: string;
  age: number;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };
  render() {
    return <div></div>;
  }
}

export default UserSearch;
