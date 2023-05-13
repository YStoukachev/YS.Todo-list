import * as React from "react";
import "./index.css";

interface IProps {
  placeHolder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  onKeyPressed?: (keyCode: string) => void;
}

export const TextInput: React.FC<IProps> = (props) => {
  const {
    placeHolder = undefined,
    value = "",
    onChange = () => {},
    onKeyPressed = () => {},
    className = "",
  } = props;

  const combinedClassName = `text-input ${className}`;

  return (
    <input
      type="text"
      className={combinedClassName}
      placeholder={placeHolder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyUp={(event) => onKeyPressed(event.code)}
    />
  );
};
