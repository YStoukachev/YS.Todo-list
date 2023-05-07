import { ToDoListItemModel } from "../../models/todo-list-item";
import { Button } from "../../shared-components/button";
import { TextInput } from "../../shared-components/text-input";
import * as React from "react";

interface IProps {
  addItemToListHandler(item: ToDoListItemModel): void;
}

export const Actions: React.FC<IProps> = (props) => {
  const { addItemToListHandler } = props;
  const [label, setLabel] = React.useState("");

  const updateLabel = (value: string) => {
    setLabel(value);
  };

  return (
    <div>
      <span>
        <TextInput
          placeHolder="Add some deal..."
          value={label}
          onChangeHandler={updateLabel}
        />
      </span>

      <span>
        <Button
          value="Add"
          className="btn btn-success"
          onClickHandler={() => {
            addItemToListHandler({
              id: crypto.randomUUID(),
              label: label,
              important: false,
              done: false,
            });
            updateLabel("");
          }}
        />
      </span>
    </div>
  );
};
