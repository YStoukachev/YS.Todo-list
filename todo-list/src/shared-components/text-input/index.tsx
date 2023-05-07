import * as React from "react";
import "./index.css";

interface IProps {
  placeHolder?: string;
  value?: string;
  onChangeHandler(value: string): void;
  className?: string;
}

export const TextInput: React.FC<IProps> = (props) => {
  const { placeHolder = undefined, value = "", onChangeHandler } = props;

  return (
    <input
      type="text"
      className="text-input"
      placeholder={placeHolder}
      value={value}
      onChange={(event) => onChangeHandler(event.target.value)}
    />
  );
};
