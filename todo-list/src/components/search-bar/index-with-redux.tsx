import * as React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../redux/app-state";
import { IToDoListFilter } from "../../models/todo-list-filter";
import * as todoActions from "../../redux/actions/todo-actions";
import { Button } from "../../shared-components/button";
import { TextInput } from "../../shared-components/text-input";

interface IProps {
  filters: IToDoListFilter;
  setFilters?: (filters: Partial<IToDoListFilter>) => void;
  resetFilters?: () => void;
}

const SearchBarWithRedux: React.FC<IProps> = (props) => {
  const { filters, setFilters = () => {}, resetFilters } = props;

  const createFilterValueHandler =
    (key: keyof IToDoListFilter) => (value?: any) => {
      switch (key) {
        case "label": {
          return setFilters({ label: value || "" });
        }
        case "onlyActive": {
          return setFilters({ onlyActive: true, onlyDone: false });
        }
        case "onlyDone": {
          return setFilters({ onlyDone: true, onlyActive: false });
        }
        case "onlyImportant": {
          return setFilters({ onlyImportant: true });
        }
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
        <Button className="button-as-link" value="All" onClick={resetFilters} />
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

const mapStateToProps = (state: IAppState): IProps => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps, todoActions)(SearchBarWithRedux);
