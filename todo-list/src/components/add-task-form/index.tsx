import { TextInput } from "../../shared-components/text-input";
import { useState } from "react";
import "./index.css";
import { Button } from "../../shared-components/button";
import {
  useCompletedTaskRemover,
  useTaskAdder,
} from "../../redux/reducers/todo.reducer";
import React from "react";

export const AddTaskForm = () => {
  const addTask = useTaskAdder();
  const clearCompletedTasks = useCompletedTaskRemover();

  const [label, setLabel] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = () => {
    if (label) {
      addTask({
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
      submitForm();
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
            value="Clear Completed"
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
