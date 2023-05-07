import * as React from "react";

interface IProps {
  checked: boolean;
  onChangeHandler(newValue: boolean): void;
}

export const CheckBox: React.FC<IProps> = (props) => {
  const { checked = false, onChangeHandler } = props;

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChangeHandler(!checked)}
    />
  );
};
