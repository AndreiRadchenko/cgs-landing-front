import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import AdminReview from "../PortfolioReview/AdminPortfolioReview";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import { adminGlobalService } from "../../../services/adminHomePage";

import { ISwapData } from "../../../types/Admin/Response.types";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IPortfolioPageData } from "../../../types/Admin/AdminPortfolio.types";
import AdminDropDown from "../Global/AdminDropDown";

interface IEditReview {
  setCurrent: (value: number) => void;
  isNewStatus: boolean;
  setIsNewStatus: Dispatch<SetStateAction<boolean>>;
  scrollFunc: () => void;
}

const EditReview = ({
  setCurrent,
  isNewStatus,
  setIsNewStatus,
  scrollFunc,
}: IEditReview) => {
  const queryClient = useQueryClient();
  const { values } = useFormikContext<IPortfolioPageData>();

  const [catValue, setCatValue] = useState(values.categories[0].name);

  const { data } = useQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );

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

  const deleteFunc = (id: string, url: string, subUrl: string) => {
    mutateAsync(id);
    deletePhoto(url);
    deletePhoto(subUrl);
    queryClient.invalidateQueries([queryKeys.getPortfolio]);
  };

  const filteredData = useMemo(
    () =>
      catValue === "All Projects"
        ? data
        : data?.filter((review) => review.categories.includes(catValue)),
    [data, catValue]
  );

  const handleDragEnd = async (oldIndex: number, newIndex: number) => {
    if (filteredData && data) {
      const srcItem = filteredData[oldIndex]._id;
      const desItem = filteredData[newIndex]._id;
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
    <>
      <Styled.AdminCategoryBlock>
        <AdminDropDown
          size="primary"
          bannerClassName="admin-portfolio-dropdown"
          menu={["All Projects", ...values.categories.map((elem) => elem.name)]}
          value={catValue}
          setValue={setCatValue}
        />
      </Styled.AdminCategoryBlock>
      <Styled.AdminReviewBlock>
        <SortableList onSortEnd={handleDragEnd}>
          {(filteredData &&
            filteredData.length !== 0 &&
            filteredData.map((review, idx) => (
              <SortableItem key={idx}>
                <Styled.DraggableWrapper>
                  <AdminReview
                    editFlag={isNewStatus}
                    review={review}
                    idx={idx}
                    setCurrent={setCurrent}
                    deleteFunc={() =>
                      review._id &&
                      review.imageBanner.image?.url &&
                      review.imageProjectBanner.image?.url &&
                      deleteFunc(
                        review._id,
                        review.image?.url,
                        review.imageProjectBanner.image?.url
                      )
                    }
                    onScroll={scrollFunc}
                    editTrigger={setIsNewStatus}
                  />
                </Styled.DraggableWrapper>
              </SortableItem>
            ))) || <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>}
        </SortableList>
      </Styled.AdminReviewBlock>
    </>
  );
};

export default EditReview;
