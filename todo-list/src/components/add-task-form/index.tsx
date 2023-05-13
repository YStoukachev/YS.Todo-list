import { IToDoListItemModel } from "../../models/todo-list-item";
import { TextInput } from "../../shared-components/text-input";
import * as React from "react";
import "./index.css";
import { Button } from "../../shared-components/button";

interface IProps {
  onSubmit: (item: IToDoListItemModel) => void;
  clearCompletedTasks: () => void;
}

export const AddTaskForm: React.FC<IProps> = (props) => {
  const { onSubmit, clearCompletedTasks } = props;
  const [label, setLabel] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const addTask = () => {
    if (Boolean(label)) {
      onSubmit({
        id: crypto.randomUUID(),
        label: label,
        important: false,
        done: false,
      });

      setLabel("");
      setErrorMessage("");
    } else {
      setErrorMessage("Write some text to add");
    }
  };

  const enterPressed = (keyCode: string) => {
    if (keyCode === "Enter" || keyCode === "NumpadEnter") {
      addTask();
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
