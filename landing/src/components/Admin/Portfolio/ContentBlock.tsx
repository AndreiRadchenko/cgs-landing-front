import { FieldArray, useFormikContext } from "formik";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminReview from "../PortfolioReview/AdminPortfolioReview";
import AddAndEdit from "./AddAndEdit";
import renderPortfolioInputs from "./renderPortfolioInputs";
import AdminDropDown from "../Global/AdminDropDown";
import {
  IPortfolioPageData,
  IPortfolioReview,
} from "../../../types/Admin/AdminPortfolio.types";
import { useScrollTo } from "../../../hooks/useScrollTo";

import MetaTagsBlock from "../MetaTagsBlock";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import { adminGlobalService } from "../../../services/adminHomePage";
import { ISwapData } from "../../../types/Admin/Response.types";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { IDragProps } from "../LogosBlock";

interface IDragItemProps {
  review: IPortfolioReview;
  index: number;
}

interface IReviews {
  reviews: IPortfolioReview[];
}

const AdminPortfolioContentBlock = () => {
  const queryClient = useQueryClient();
  const { values, handleChange, handleSubmit } =
    useFormikContext<IPortfolioPageData>();
  const { data } = useQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );
  const [ref, scrollHandler] = useScrollTo<HTMLDivElement>();
  const { mutateAsync } = useMutation(
    [queryKeys.deletePortfolioReview],
    (id: string) => adminPortfolioService.deleteReview(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolio]);
      },
    }
  );

  const { mutateAsync: swapReviews } = useMutation(
    [queryKeys.deletePortfolioReview],
    (swapData: ISwapData) => adminPortfolioService.swapReviews(swapData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolio]);
      },
    }
  );
  const { mutateAsync: deletePhoto } = useMutation(
    [queryKeys.deleteImage],
    (url: string) => adminGlobalService.deleteImage(url)
  );

  const deleteFunc = (id: string, url: string) => {
    mutateAsync(id);
    deletePhoto(url);
    queryClient.invalidateQueries([queryKeys.getPortfolio]);
  };
  const [current, setCurrent] = useState(0);
  const [isNewStatus, setIsNewStatus] = useState(true);
  const [catValue, setCatValue] = useState(values.categories[0]);

  const submitFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleDragEnd = async ({ oldIndex, newIndex }: IDragProps) => {
    const srcInd = oldIndex;
    const desInd: number | undefined = newIndex;
    const swapped = data;
    swapped &&
      typeof desInd === "number" &&
      swapped.splice(desInd, 0, swapped.splice(srcInd, 1)[0]);
    typeof desInd === "number" &&
      (await swapReviews({ srcInd, desInd })) &&
      queryClient.setQueryData([queryKeys.getPortfolio], swapped);
  };

  const SortableListItem = SortableElement<IDragItemProps>(
    ({ review, index }: IDragItemProps) => {
      return (
        <div>
          <AdminReview
            editFlag={isNewStatus}
            review={review}
            idx={index}
            setCurrent={setCurrent}
            deleteFunc={() =>
              review._id &&
              review.image &&
              deleteFunc(review._id, review.image?.url)
            }
            onScroll={scrollHandler}
            editTrigger={setIsNewStatus}
          />
        </div>
      );
    }
  );

  const SortableList = SortableContainer<IReviews>(({ reviews }: IReviews) => (
    <div>
      {reviews.map((review, index) => {
        return (
          <Styled.DraggableWrapper key={index}>
            <SortableListItem review={review} index={index} />
          </Styled.DraggableWrapper>
        );
      })}
    </div>
  ));

  return (
    <div>
      <Styled.AdminPaddedBlock>
        <Styled.AdminHeader ref={ref}>Portfolio</Styled.AdminHeader>
        <Styled.AdminSubTitle>Category</Styled.AdminSubTitle>
        <Styled.AdminCategoryBlock>
          <FieldArray name="categories">
            {() =>
              renderPortfolioInputs({
                state: values.categories,
                handleChange,
              })
            }
          </FieldArray>
        </Styled.AdminCategoryBlock>
        <Styled.AdminBigButton onClick={submitFunction} type="button">
          Save categories
        </Styled.AdminBigButton>
        <Styled.AdminSubTitle>Add a new case</Styled.AdminSubTitle>
        <AddAndEdit
          current={current}
          isNewStatus={isNewStatus}
          reviews={data}
          setIsNewStatus={setIsNewStatus}
        />
        <Styled.AdminCategoryBlock>
          <AdminDropDown
            menu={values.categories}
            value={catValue}
            setValue={setCatValue}
          />
        </Styled.AdminCategoryBlock>
        <Styled.AdminReviewBlock>
          {(data &&
            data.filter((review) => review.category == catValue).length !==
              0 && (
              <SortableList
                reviews={data.filter((review) => review.category == catValue)}
                onSortEnd={handleDragEnd}
              />
            )) || <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>}
        </Styled.AdminReviewBlock>
      </Styled.AdminPaddedBlock>
      <MetaTagsBlock theme="dark" sitemap="portfolio" />
      <Styled.AdminPaddedBlock>
        <Styled.AdminBigButton type="submit" onClick={submitFunction}>
          Submit
        </Styled.AdminBigButton>
      </Styled.AdminPaddedBlock>
    </div>
  );
};

export default AdminPortfolioContentBlock;
