import * as React from "react";

interface IProps {
  checked: boolean;
  onChange(newValue: boolean): void;
}

export const CheckBox: React.FC<IProps> = (props) => {
  const { checked = false, onChange } = props;

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange(!checked)}
    />
  );
};
