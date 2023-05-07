import * as React from "react";
import { TextInput } from "../../shared-components/text-input";
import { Button } from "../../shared-components/button";

interface IProps {
  searchHandler(label: string): void;
  showDoneTasksHandler(isDone: boolean): void;
  showImportantTasksHandler(isImportant: boolean): void;
  showAllTasksHandler(): void;
}

export const SearchBar: React.FC<IProps> = (props) => {
  const {
    searchHandler,
    showDoneTasksHandler,
    showAllTasksHandler,
    showImportantTasksHandler,
  } = props;
  const [searchLabel, setSearchLabel] = React.useState<string>("");

  const updateSearchLabel = (value: string) => {
    setSearchLabel(value);
    searchHandler(value);
  };

  return (
    <div>
      <span>
        <TextInput
          value={searchLabel}
          placeHolder="Type to search something..."
          onChangeHandler={updateSearchLabel}
        />
      </span>
      <span>
        <Button value="All" onClickHandler={() => showAllTasksHandler()} />
      </span>
      <span>
        <Button
          value="Active"
          onClickHandler={() => showDoneTasksHandler(false)}
        />
      </span>
      <span>
        <Button
          value="Done"
          onClickHandler={() => showDoneTasksHandler(true)}
        />
      </span>
      <span>
        <Button
          value="Important"
          onClickHandler={() => showImportantTasksHandler(true)}
        />
      </span>
    </div>
  );
};
