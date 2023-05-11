import * as React from "react";

interface IProps {
  value: string;
  onClick(): void;
  className?: string;
}

export const Button: React.FC<IProps> = (props) => {
  const { value: buttonName, onClick, className } = props;

  return (
    <input
      type="button"
      value={buttonName}
      onClick={onClick}
      className={className}
    />
  );
};
