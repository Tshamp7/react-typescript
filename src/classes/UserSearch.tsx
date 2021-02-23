import React, { Component } from "react";

// Instead of setting the users array as a local variable, we have set this RCC up to recieve the
// users array as props, making this more reusable.

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

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    const { user, name } = this.state;

    return (
      <div>
        User Search
        <input
          value={name}
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Search</button>
        <div>{user && user.name}</div>
        <div>{user && user.age}</div>
      </div>
    );
  }
}

export default UserSearch;
