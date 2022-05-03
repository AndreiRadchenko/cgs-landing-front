import { AdminInput } from "../../../styles/AdminPage";
import React from "react";

interface IRenderInputsProps {
  state: string[];
  handleChange: (e: string | React.ChangeEvent<any>) => void;
}

const renderPortfolioInputs = ({ state, handleChange }: IRenderInputsProps) => {
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
