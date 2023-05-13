import * as React from "react";
import "./index.css";

interface IProps {
  value: string;
  onClick?: () => void;
  className?: string;
  isIcon?: boolean;
  iconType?: string;
}

export const Button: React.FC<IProps> = (props) => {
  const {
    value: buttonName,
    onClick,
    className,
    isIcon = false,
    iconType,
  } = props;

  return isIcon ? (
    <span onClick={onClick} className={iconType}></span>
  ) : (
    <input
      type="button"
      value={buttonName}
      onClick={onClick}
      className={className}
    />
  );
};
