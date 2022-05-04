import { AdminInput } from "../../../styles/AdminPage";
import React from "react";
import { IRenderPortfolioInputsProps } from "./Portfolio.types";

const renderPortfolioInputs = ({
  state,
  handleChange,
}: IRenderPortfolioInputsProps) => {
  return state.map((i, ind) => (
    <AdminInput
      value={i}
      key={`category${ind}`}
      onChange={handleChange}
      name={`categories.${ind}`}
    />
  ));
};

export default renderPortfolioInputs;
