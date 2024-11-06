import { Label } from "./Label";
import { Input } from "./Input";

export const InputForm = (props) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};
