import * as React from "react";
import { ButtonStyles } from "../../helpers/button-style";

interface IProps {
  value: string;
  buttonStyle?: ButtonStyles;
}

export const Button: React.FC<IProps> = (props) => {
  return (
    <input
      type="button"
      value={props.value}
      className={
        props.buttonStyle ? ButtonStyles[props.buttonStyle] : undefined
      }
    />
  );
};
