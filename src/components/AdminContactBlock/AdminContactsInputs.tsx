import React from "react";
import { AdminInput } from "../../styles/AdminPage";
import { IContactFormBlock } from "../../types/Admin/Response.types";

const AdminContactInputs = ({
  state,
  onChangeFunction,
}: {
  state: IContactFormBlock;
  onChangeFunction: any;
}) => {
  return (
    <div>
      <AdminInput
            name={`ContactFormBlock.subtitle`}
            value={state.subtitle}
            onChange={onChangeFunction}
          />
          <AdminInput
            name={`ContactFormBlock.name`}
            value={state.name}
            onChange={onChangeFunction}
          />
          <AdminInput
            name={`ContactFormBlock.email`}
            value={state.email}
            onChange={onChangeFunction}
          />
          <AdminInput
            name={`ContactFormBlock.message`}
            value={state.message}
            onChange={onChangeFunction}
          />
    </div>
  );
};

export default AdminContactInputs;
