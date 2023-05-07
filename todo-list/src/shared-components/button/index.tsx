import * as React from "react";

interface IProps {
  value: string;
  onClickHandler(): void;
  className?: string;
}

export const Button: React.FC<IProps> = (props) => {
  const { value: buttonName, onClickHandler, className } = props;

  return (
    <input
      type="button"
      value={buttonName}
      onClick={onClickHandler}
      className={className}
    />
  );
};
