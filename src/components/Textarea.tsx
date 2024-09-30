import { ChangeEvent } from "react";
interface TextareaProps {
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void; // Corrected type
  placeholder?: string;
  required?: boolean;
}

export default function Textarea(props: TextareaProps) {
  const { name, value, onChange, placeholder, required = false } = props;

  return (
    <div className="input-wrapper">
      <label className="label">{name}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder || name}
        required={required}
        className="textarea"
      />
    </div>
  );
}
