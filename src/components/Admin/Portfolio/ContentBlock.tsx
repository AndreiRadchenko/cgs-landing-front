import { FieldArray, useFormikContext } from "formik";
import React, { useState } from "react";
import useSubmitAndDeletePortfolio from "../../../hooks/useSubmitAndDeletePortfolio";
import * as Styled from "../../../styles/AdminPage";
import { IPortfolioResponse } from "../../../types/Admin/AdminPortfolio";
import AdminCarousel from "../Global/AdminImageCarousel";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminReview from "../PortfolioReview/AdminPortfolioReview";
import AddAndEdit from "./AddAndEdit";
import renderPortfolioInputs from "./renderPortfolioInputs";

const AdminPortfolioContentBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<
    IPortfolioResponse
  >();
  const [current, setCurrent] = useState(0);
  const {
    deleteFunc,
    submitFunc,
    setIsReady,
    editFunc,
    isNewStatus,
    setIsNewStatus,
  } = useSubmitAndDeletePortfolio(setCurrent);

  const submit = () => handleSubmit();
  const deleteF = () => deleteFunc(current);

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Portfolio</Styled.AdminHeader>
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={values.subtitle}
            name="subtitle"
            onChangeFunction={handleChange}
          />
        </div>
      </Styled.AdminHalfGrid>
      <Styled.AdminSubTitle>Category</Styled.AdminSubTitle>

      <Styled.AdminCategoryBlock>
        <FieldArray name="categories">
          {() =>
            renderPortfolioInputs({ state: values.categories, handleChange })
          }
        </FieldArray>
      </Styled.AdminCategoryBlock>

      <Styled.AdminHalfGrid>
        <AddAndEdit
          current={current}
          isNewStatus={isNewStatus}
          setIsReady={setIsReady}
          editFunc={editFunc}
          submitFunc={submitFunc}
        />

        <Styled.AdminReviewBlock>
          {values.reviews.length === 0 ? (
            <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>
          ) : (
            <AdminReview
              editFlag={isNewStatus}
              review={values.reviews[current]}
              deleteFunc={deleteF}
              editTrigger={setIsNewStatus}
            />
          )}
          <AdminCarousel
            page={current}
            setPage={setCurrent}
            length={values.reviews.length}
          />
        </Styled.AdminReviewBlock>
      </Styled.AdminHalfGrid>
      <br />
      <br />
      <Styled.AdminBigButton type="submit" onClick={submit}>
        Save changes
      </Styled.AdminBigButton>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminPortfolioContentBlock;
