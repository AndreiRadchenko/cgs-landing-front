import { useFormikContext } from "formik";
import React from "react";
import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";

const WhoNeedApps = () => {
  const { values, handleChange } = useFormikContext<IServiceMobile>();

  return (
    <AdminPaddedBlock>
      <AdminHalfGrid>
        <div>
          {renderInputs({
            props: { name: "whoNeedApps" },
            state: values.whoNeedApps,
            onChangeFunction: handleChange,
          })}
        </div>
      </AdminHalfGrid>
    </AdminPaddedBlock>
  );
};

export default WhoNeedApps;
