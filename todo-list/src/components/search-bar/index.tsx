import { Button } from "../../shared-components/button";
import "./index.css";
import {
  ITaskFilter,
  useCompletedTaskRemover,
  useFilterUpdater,
} from "../../redux/reducers/todo.reducer";
import React from "react";

interface ButtonType {
  all: boolean;
  active: boolean;
  done: boolean;
  important: boolean;
}

export const SearchBar = () => {
  const updateFilters = useFilterUpdater();
  const clearCompletedTasks = useCompletedTaskRemover();
  const defaultObject: ButtonType = {
    all: false,
    active: false,
    done: false,
    important: false,
  };
  const [dict, setDict] = React.useState<ButtonType>(defaultObject);

  const createFilterValueHandler = (key: keyof ITaskFilter) => () => {
    if (key === "onlyActive") {
      updateFilters({ onlyActive: true, onlyDone: false });
      setDict({
        ...defaultObject,
        active: true,
      });
    }

    if (key === "onlyDone") {
      updateFilters({ onlyDone: true, onlyActive: false });
      setDict({
        ...defaultObject,
        done: true,
      });
    }

    if (key === "onlyImportant") {
      updateFilters({ onlyImportant: true });
      setDict({
        ...defaultObject,
        important: true,
      });
    }
  };

  return (
    <div className="search-bar">
      <span className="margin-left">
        <Button
          className={"button-as-link " + (dict["all"] && "button-clicked")}
          value="All"
          onClick={() => {
            updateFilters({});
            setDict({
              ...defaultObject,
              all: true,
            });
          }}
        />
      </span>
      <span className="margin-left">
        <Button
          className={"button-as-link " + (dict["active"] && "button-clicked")}
          value="Active"
          onClick={createFilterValueHandler("onlyActive")}
        />
      </span>
      <span className="margin-left">
        <Button
          className={"button-as-link " + (dict["done"] && "button-clicked")}
          value="Done"
          onClick={createFilterValueHandler("onlyDone")}
        />
      </span>
      <span className="margin-left">
        <Button
          className={
            "button-as-link " + (dict["important"] && "button-clicked")
          }
          value="Important"
          onClick={createFilterValueHandler("onlyImportant")}
        />
      </span>
      <span className="margin-left">
        <Button
          className="button-as-link"
          value="Clear Completed"
          onClick={clearCompletedTasks}
        />
      </span>
    </div>
  );
};
