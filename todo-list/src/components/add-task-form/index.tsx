import { IToDoListItemModel } from "../../models/todo-list-item";
import { Button } from "../../shared-components/button";
import { TextInput } from "../../shared-components/text-input";
import * as React from "react";

interface IProps {
  onSubmit: (item: IToDoListItemModel) => void;
}

export const AddTaskForm: React.FC<IProps> = (props) => {
  const { onSubmit } = props;
  const [label, setLabel] = React.useState("");

  const addTask = () => {
    onSubmit({
      id: crypto.randomUUID(),
      label: label,
      important: false,
      done: false,
    });

    setLabel("");
  };

  return (
    <div>
      <span>
        <TextInput
          placeHolder="Add some deal..."
          value={label}
          onChange={setLabel}
        />
      </span>
      <span>
        <Button value="Add" className="btn btn-success" onClick={addTask} />
      </span>
    </div>
  );
};
