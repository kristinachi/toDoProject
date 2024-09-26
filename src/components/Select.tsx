import { ChangeEvent } from "react";

interface SelectProps {
  name: string;
  value: string;
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

export default function Select(props: SelectProps) {
  const { name, value, options, onChange, disabled } = props;

  return (
    <div className="input-wrapper">
      <label className="label">{name}</label>
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="select"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
