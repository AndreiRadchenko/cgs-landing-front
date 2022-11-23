import { FieldArray, useFormikContext } from "formik";
import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import AdminReview from "../PortfolioReview/AdminPortfolioReview";
import AddAndEdit from "./AddAndEdit";
import renderPortfolioInputs from "./renderPortfolioInputs";
import AdminDropDown from "../Global/AdminDropDown";
import { IPortfolioPageData } from "../../../types/Admin/AdminPortfolio.types";
import { useScrollTo } from "../../../hooks/useScrollTo";

import MetaTagsBlock from "../MetaTagsBlock";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import { adminGlobalService } from "../../../services/adminHomePage";
import { ISwapData } from "../../../types/Admin/Response.types";
import SortableList, { SortableItem } from "react-easy-sort";

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
    [queryKeys.swapPortfolioReviews],
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

  const sortedData =
    data && data.filter((review) => review.category == catValue);

  const handleDragEnd = async (oldIndex: number, newIndex: number) => {
    if (sortedData && data) {
      const srcItem = sortedData[oldIndex]._id;
      const desItem = sortedData[newIndex]._id;
      const srcInd = data.findIndex((el) => el._id === srcItem);
      const desInd = data.findIndex((el) => el._id === desItem);
      const swapped = data;

      swapped &&
        typeof desInd === "number" &&
        swapped.splice(desInd, 0, swapped.splice(srcInd, 1)[0]);
      typeof desInd === "number" &&
        (await swapReviews({ srcInd, desInd })) &&
        queryClient.setQueryData([queryKeys.getPortfolio], swapped);
    }
  };

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
          <SortableList onSortEnd={handleDragEnd}>
            {(sortedData &&
              sortedData.length !== 0 &&
              sortedData.map((review, idx) => (
                <SortableItem key={idx}>
                  <Styled.DraggableWrapper>
                    <AdminReview
                      editFlag={isNewStatus}
                      review={review}
                      idx={idx}
                      setCurrent={setCurrent}
                      deleteFunc={() =>
                        review._id &&
                        review.image &&
                        deleteFunc(review._id, review.image?.url)
                      }
                      onScroll={scrollHandler}
                      editTrigger={setIsNewStatus}
                    />
                  </Styled.DraggableWrapper>
                </SortableItem>
              ))) || <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>}
          </SortableList>
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
