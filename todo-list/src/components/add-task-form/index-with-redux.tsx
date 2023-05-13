import * as React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../redux/app-state";
import * as toDoListActions from "../../redux/actions/todo-actions";
import { TextInput } from "../../shared-components/text-input";
import { IToDoListItemModel } from "../../models/todo-list-item";
import "./index.css";
import { Button } from "../../shared-components/button";

interface IProps {
  addTask: (newItem: IToDoListItemModel) => void;
  clearCompletedTasks?: () => void;
}

const AddTaskFormWithRedux: React.FC<IProps> = (props) => {
  const { addTask, clearCompletedTasks } = props;
  const [label, setLabel] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const onSumbit = () => {
    if (Boolean(label)) {
      addTask({
        id: crypto.randomUUID(),
        done: false,
        label: label,
        important: false,
      });
      setLabel("");
      setErrorMessage("");
    } else {
      setErrorMessage("Write some text to add");
    }
  };

  const enterPressed = (keyCode: string) => {
    if (keyCode === "Enter" || keyCode === "NumpadEnter") {
      onSumbit();
    }
  };

  return (
    <div className="margin-top">
      <div>
        <span>
          <TextInput
            placeHolder="Add some deal..."
            value={label}
            onChange={setLabel}
            onKeyPressed={enterPressed}
          />
        </span>
        <span className="margin-left">
          <Button
            className="button-as-link"
            value="Clear Complted"
            onClick={clearCompletedTasks}
          />
        </span>
      </div>
      {Boolean(errorMessage) && (
        <div className="error-message">{errorMessage}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: IAppState): IProps => {
  return {
    addTask: () => {},
  };
};

export default connect(mapStateToProps, toDoListActions)(AddTaskFormWithRedux);
