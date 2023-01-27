import React from "react";
import {
  AdminCheckBox,
  AdminSplitColumnText,
  Box,
} from "../../../styles/AdminPage";

const SplitColumns = () => {
  return (
    <label htmlFor="split">
      <Box align="center">
        <AdminCheckBox name="isSplitColumns" type="checkbox" />
        <AdminSplitColumnText>split columns</AdminSplitColumnText>
      </Box>
    </label>
  );
};

export default SplitColumns;
