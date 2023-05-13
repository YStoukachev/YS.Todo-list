import * as React from "react";
import { TextInput } from "../../shared-components/text-input";
import { Button } from "../../shared-components/button";
import "./index.css";
import { IToDoListFilter } from "../../models/todo-list-filter";

interface IProps {
  filters: IToDoListFilter;
  onFilterChanges: (filter: Partial<IToDoListFilter>) => void;
  onResetFilters: () => void;
}

export const SearchBar: React.FC<IProps> = (props) => {
  const { onFilterChanges, filters, onResetFilters } = props;

  const createFilterValueHandler =
    (key: keyof IToDoListFilter) => (value?: any) => {
      if (key === "label") {
        onFilterChanges({ label: value || "" });
      }

      if (key === "onlyActive") {
        onFilterChanges({ onlyActive: true, onlyDone: false });
      }

      if (key === "onlyDone") {
        onFilterChanges({ onlyDone: true, onlyActive: false });
      }

      if (key === "onlyImportant") {
        onFilterChanges({ onlyImportant: true });
      }
    };

  return (
    <div className="margin-top">
      <span>
        <TextInput
          value={filters.label || ""}
          placeHolder="Type to search something..."
          onChange={createFilterValueHandler("label")}
        />
      </span>
      <span className="margin-left">
        <Button
          className="button-as-link"
          value="All"
          onClick={onResetFilters}
        />
      </span>
      <span className="margin-left">
        <Button
          className="button-as-link"
          value="Active"
          onClick={createFilterValueHandler("onlyActive")}
        />
      </span>
      <span className="margin-left">
        <Button
          className="button-as-link"
          value="Done"
          onClick={createFilterValueHandler("onlyDone")}
        />
      </span>
      <span className="margin-left">
        <Button
          className="button-as-link"
          value="Important"
          onClick={createFilterValueHandler("onlyImportant")}
        />
      </span>
    </div>
  );
};
