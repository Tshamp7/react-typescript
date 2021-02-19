import ReactDOM from "react-dom";
import { useState } from "react";
import UserSearch from "./state/UserSearch";
//import Parent from "./props/Parent";
//import GuestList from "./state/GuestList";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
