import ReactDOM from "react-dom";
import UserSearch from "./refs/UserSearch";
//import EventComponent from "./events/EventComponent";
//import UserSearch from "./state/UserSearch";
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
