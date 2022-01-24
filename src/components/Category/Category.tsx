import React, { FC } from "react";
import * as StyledThisComp from "./Category.styled";

interface ICategoryProps {
  title: string;
  description: string;
  url: string;
}

const Category: FC<ICategoryProps> = ({ title, description, url }) => {
  return <StyledThisComp.CategoryContainer></StyledThisComp.CategoryContainer>;
};

export default Category;
