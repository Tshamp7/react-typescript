interface ChildProps {
  color: string;
}
// While the below example works, it does not let TS know that this is a React Component.
export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// This syntax lets TS know that this is in fact a React Component.
// The method which you choose to use depends on if you need to call any methods that are unique to React components
// while using typescript.
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
