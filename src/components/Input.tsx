import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

export default function Input(props: InputProps) {
  const { name, value, type, onChange, placeholder, required = false } = props;

  return (
    <div className="input-wrapper">
      <label className="label">{name}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder || name}
        required={required}
        className="input"
      />
    </div>
  );
}
