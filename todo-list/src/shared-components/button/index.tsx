import * as React from "react";
import { ButtonStyles } from "../../enums/button-style";

interface IProps {
  value: string;
  buttonStyle?: ButtonStyles;
  onClickHandler(): void;
}

export const Button: React.FC<IProps> = (props) => {
  const { value: buttonName, buttonStyle = undefined, onClickHandler } = props;

  return (
    <input
      type="button"
      value={buttonName}
      onClick={onClickHandler}
      className={buttonStyle && ButtonStyles[buttonStyle]}
    />
  );
};
