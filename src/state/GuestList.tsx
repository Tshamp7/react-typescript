import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  const renderList = () => {
    return guests.map((guest) => {
      return <li key={guest}>{guest}</li>;
    });
  };

  return (
    <div>
      Guest List
      <ul>{renderList()}</ul>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
