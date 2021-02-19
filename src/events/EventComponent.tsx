import React from "react";

const EventComponent: React.FC = () => {
  // Type inference cannot tell what this event type should be even though it is passed through from the input element below.
  // So we must explicitly tell TS what type this event has. We can mouse over the event origins prop name, such as
  // onChange, or onDragStart to see the event type.

  // change event
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  // drag event
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {};

  return (
    <div>
      <input type="text" onChange={(e) => onChange(e)} />
      <div draggable onDragStart={(e) => onDragStart(e)}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
