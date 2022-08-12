import { FieldArray, useFormikContext } from "formik";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminReview from "../PortfolioReviewPage/AdminPortfolioReview";
import AddAndEdit from "./AddAndEdit";
import renderPortfolioInputs from "./renderPortfolioInputs";
import AdminDropDown from "../Global/AdminDropDown";
import { IPortfolioData } from "../../../types/Admin/AdminPortfolioPage.types";
import useSubmitAndDeletePortfolioPage from "../../../hooks/useSubmitAndDeletePortfolioPage";
import MetaTagsBlock from "../MetaTagsBlock";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";

const AdminPortfolioContentBlock = () => {
  const queryClient = useQueryClient();
  const { values, handleChange, handleSubmit } =
    useFormikContext<IPortfolioData>();
  const [current, setCurrent] = useState(0);
  const {
    deleteFunc,
    submitFunc,
    setIsReady,
    editFunc,
    isNewStatus,
    setIsNewStatus,
  } = useSubmitAndDeletePortfolioPage(setCurrent);
  const [catValue, setCatValue] = useState(values.categories[0]);

  const submitFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleDragEnd = (param: DropResult) => {
    const srcIndex = param.source.index;
    const desIndex: number | undefined = param.destination?.index;

    typeof desIndex === "number" &&
      values.reviews.splice(desIndex, 0, values.reviews.splice(srcIndex, 1)[0]);
    queryClient.invalidateQueries(queryKeys.getPortfolioPage);
    handleSubmit();
  };

  return (
    <div>
      <Styled.AdminPaddedBlock>
        <Styled.AdminHeader>Portfolio</Styled.AdminHeader>
        <Styled.AdminSubTitle>Category</Styled.AdminSubTitle>
        <Styled.AdminCategoryBlock>
          <FieldArray name="categories">
            {() =>
              renderPortfolioInputs({ state: values.categories, handleChange })
            }
          </FieldArray>
        </Styled.AdminCategoryBlock>
        <Styled.AdminBigButton onClick={submitFunction} type="button">
          Save categories
        </Styled.AdminBigButton>
        <Styled.AdminSubTitle>Add a new case</Styled.AdminSubTitle>
        <AddAndEdit
          defaultCategory={values.categories[0]}
          current={current}
          isNewStatus={isNewStatus}
          setIsReady={setIsReady}
          editFunc={editFunc}
          submitFunc={submitFunc}
        />
        <Styled.AdminCategoryBlock>
          <AdminDropDown
            menu={values.categories}
            value={catValue}
            setValue={setCatValue}
          />
        </Styled.AdminCategoryBlock>
        <Styled.AdminReviewBlock>
          {(values.reviews.filter((review) => review.category == catValue)
            .length === 0 && (
            <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>
          )) || (
            <DragDropContext onDragEnd={(param) => handleDragEnd(param)}>
              <Droppable droppableId={"droppable-1"}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {values.reviews.map(
                      (review, i) =>
                        review.category === catValue && (
                          <Draggable
                            draggableId={"draggable-" + i}
                            index={i}
                            key={i}
                          >
                            {(provided) => (
                              <Styled.DraggableWrapper
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <AdminReview
                                  editFlag={isNewStatus}
                                  review={review}
                                  idx={i}
                                  setCurrent={setCurrent}
                                  deleteFunc={() => deleteFunc(i)}
                                  editTrigger={setIsNewStatus}
                                />
                              </Styled.DraggableWrapper>
                            )}
                          </Draggable>
                        )
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </Styled.AdminReviewBlock>
      </Styled.AdminPaddedBlock>
      <MetaTagsBlock theme="dark" />
      <Styled.AdminPaddedBlock>
        <Styled.AdminBigButton type="submit" onClick={submitFunction}>
          Submit
        </Styled.AdminBigButton>
      </Styled.AdminPaddedBlock>
    </div>
  );
};

export default AdminPortfolioContentBlock;
