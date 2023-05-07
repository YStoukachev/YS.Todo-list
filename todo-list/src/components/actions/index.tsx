import { ButtonStyles } from "../../helpers/button-style";
import { Button } from "../../shared-components/button";
import { TextInput } from "../../shared-components/text-input";

export const Actions = () => {
  return (
    <div>
      <TextInput placeHolder="Add some deal..." />
      <div>
        <Button value="Add" buttonStyle={ButtonStyles.addButton} />
        <Button value="Delete" buttonStyle={ButtonStyles.deleteButton} />
      </div>
    </div>
  );
};
