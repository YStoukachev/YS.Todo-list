import * as React from "react";
import { TextInput } from "../../shared-components/text-input";

interface IProps {}

export const SearchBar: React.FC<IProps> = (props) => {
  return (
    <div>
      <TextInput placeHolder="Type to search something..." />
    </div>
  );
};
