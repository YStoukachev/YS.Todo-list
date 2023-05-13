import "./index.css";
import * as React from "react";

interface IProps {
  appStyleType: string;
}

export const Header: React.FC<IProps> = (props) => {
  const { appStyleType } = props;

  return (
    <div className="header-container">
      <div className="greeting">
        Welcom to TODO application handler with {appStyleType}
      </div>
    </div>
  );
};
