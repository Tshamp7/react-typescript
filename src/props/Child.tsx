interface ChildProps {
  color: string;
  onClick: () => void;
}

// While the below example works, it does not let TS know that this is a React Component.
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
};

// This syntax lets TS know that this is in fact a React Component.
// The method which you choose to use depends on if you need to call any methods that are unique to React components
// while using typescript.
// This method will also account for an Children that a component is receiving as props. The above will not.
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
};
