import {
  AdminCheckBox,
  AdminSplitColumnText,
  Box,
} from "../../../styles/AdminPage";
import React from "react";

const IsRequired = () => {
  return (
    <label htmlFor="required">
      <Box align="center">
        <AdminCheckBox name="isRequired" type="checkbox" />
        <AdminSplitColumnText>required</AdminSplitColumnText>
      </Box>
    </label>
  );
};

export default IsRequired;
