import * as React from "react";
import "./index.css";

interface IProps {
  checked: boolean;
  onChange(newValue: boolean): void;
}

export const CheckBox: React.FC<IProps> = (props) => {
  const { checked = false, onChange } = props;

  return (
    <input
      className="round-checkbox"
      type="checkbox"
      checked={checked}
      onChange={() => onChange(!checked)}
    />
  );
};
