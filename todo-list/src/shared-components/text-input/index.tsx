import * as React from "react";

interface IProps {
  placeHolder?: string;
  value?: string;
  onChangeHandler(value: string): void;
}

export const TextInput: React.FC<IProps> = (props) => {
  const { placeHolder = undefined, value = "", onChangeHandler } = props;

  return (
    <input
      type="text"
      placeholder={placeHolder}
      value={value}
      onChange={(event) => onChangeHandler(event.target.value)}
    />
  );
};
