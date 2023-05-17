import { TextInput } from "../../shared-components/text-input";
import { Button } from "../../shared-components/button";
import "./index.css";
import {
  ITaskFilter,
  useFilterUpdater,
  useFilteredTaskList,
} from "../../redux/reducers/todo.reducer";

export const SearchBar = () => {
  const { filters } = useFilteredTaskList();
  const updateFilters = useFilterUpdater();

  const createFilterValueHandler =
    (key: keyof ITaskFilter) => (value?: any) => {
      if (key === "label") {
        updateFilters({ label: value || "" });
      }

      if (key === "onlyActive") {
        updateFilters({ onlyActive: true, onlyDone: false });
      }

      if (key === "onlyDone") {
        updateFilters({ onlyDone: true, onlyActive: false });
      }

      if (key === "onlyImportant") {
        updateFilters({ onlyImportant: true });
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
          onClick={() => updateFilters({})}
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
