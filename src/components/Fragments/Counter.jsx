import { Button } from "../Elements/Button";

export const Counter = () => {
  return (
    <div>
      <h1>Counter</h1>
      <Button
        classname="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
        type="button"
      >
        +
      </Button>
    </div>
  );
};
