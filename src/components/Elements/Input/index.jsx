import { Label } from "./Label";
import { Input } from "./Input";
import { forwardRef } from "react";

export const InputForm = forwardRef((props, ref) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} ref={ref} />
    </div>
  );
});
