import { ButtonStyles } from "../../enums/button-style";
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
      <TextInput
        placeHolder="Add some deal..."
        value={label}
        onChangeHandler={updateLabel}
      />
      <div>
        <Button
          value="Add"
          buttonStyle={ButtonStyles.addButton}
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
      </div>
    </div>
  );
};
