import React from "react";
import { AdminInput } from "../../styles/AdminPage";

const AdminContactInputs = ({
  state,
  onChangeFunction,
}: {
  state: string[];
  onChangeFunction: any;
}) => {
  return (
    <div>
      {state.map((i, ind) => {
        return (
          <AdminInput
            key={`input${ind}`}
            name={`ContactFormBlock.inputs.${ind}`}
            value={i}
            onChange={onChangeFunction}
          />
        );
      })}
    </div>
  );
};

export default AdminContactInputs;
