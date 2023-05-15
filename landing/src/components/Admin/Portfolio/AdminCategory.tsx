import React, { useEffect } from "react";
import { useFormikContext } from "formik";

import SaveBtn from "../Global/SaveBtn";

import { IPortfolioPageData } from "../../../types/Admin/AdminPortfolio.types";
import TrashIcon from "./TrashIcon";
import * as Styled from "../../../styles/AdminPage";

const AdminCategory = () => {
  const { values, setValues, handleChange, handleSubmit } =
    useFormikContext<IPortfolioPageData>();

  const handleAddItem = () => {
    setValues((prev) => ({
      ...prev,
      categories: [{ name: "", description: "" }, ...prev.categories],
    }));
  };

  const handleDeleteItem = (index: number) => {
    setValues((prevState) => ({
      ...prevState,
      categories: prevState.categories.filter((_, i) => i !== index),
    }));
  };

  const submitFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!values.categories[0].name && !values.categories[0].description) {
      setValues((prev) => ({
        ...prev,
        categories: prev.categories.slice(1),
      }));

      handleSubmit();
    } else {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (values.categories[0].name && values.categories[0].description) {
      handleAddItem();
    }
  }, []);

  return (
    <Styled.AdminCategoryBlockWrapper>
      <Styled.AdminCategoryBlock>
        {values.categories.map((item, index) => (
          <Styled.CategoryWrapper key={`category${index}`}>
            <Styled.AdminNewCategoryInputWrapper>
              <Styled.AdminCategoryNameInput
                placeholder="Add new category"
                value={item.name}
                onChange={handleChange}
                name={`categories.${index}.name`}
              />
              {index ? (
                <Styled.AdminCategoryDeleteBlockWrapper
                  onClick={() => handleDeleteItem(index)}
                >
                  <TrashIcon />
                </Styled.AdminCategoryDeleteBlockWrapper>
              ) : (
                <Styled.AdminCategoryAddBlockWrapper onClick={handleAddItem}>
                  <Styled.AdminCategoryAddBlockBtn>
                    {"[ +add next ]"}
                  </Styled.AdminCategoryAddBlockBtn>
                </Styled.AdminCategoryAddBlockWrapper>
              )}
            </Styled.AdminNewCategoryInputWrapper>
            <Styled.AdminCategoryDescriptionInput
              placeholder="Add description"
              value={item.description}
              onChange={handleChange}
              name={`categories.${index}.description`}
            />
          </Styled.CategoryWrapper>
        ))}
      </Styled.AdminCategoryBlock>
      <SaveBtn title="Save Changes" handleClick={submitFunction} />
    </Styled.AdminCategoryBlockWrapper>
  );
};

export default AdminCategory;
