import * as React from "react";

interface IProps {
  placeHolder?: string;
}

export const TextInput: React.FC<IProps> = (props) => {
  return <input type="text" placeholder={props.placeHolder} />;
};
