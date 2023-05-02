import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useFormikContext } from "formik";
import SortableList, { SortableItem } from "react-easy-sort";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import AdminReview from "../PortfolioReview/AdminPortfolioReview";
import { adminPortfolioService } from "../../../services/adminPortfolioPage";
import { adminGlobalService } from "../../../services/adminHomePage";
import AdminDropDown from "../Global/AdminDropDown";

import {
  IPortfolioPageData,
  IPortfolioReview,
} from "../../../types/Admin/AdminPortfolio.types";
import { ISwapData } from "../../../types/Admin/Response.types";
import { AdminPortfolioPageSize } from "../../../consts";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/AdminPage";

interface IEditReview {
  setCurrent: (value: number) => void;
  scrollHandler: () => void;
  isNewStatus: boolean;
  setIsNewStatus: Dispatch<SetStateAction<boolean>>;
}

const EditReview = ({
  setCurrent,
  scrollHandler,
  isNewStatus,
  setIsNewStatus,
}: IEditReview) => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<IPortfolioReview[]>([]);

  const { values } = useFormikContext<IPortfolioPageData>();
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

  const deleteFunc = (id: string, url: string) => {
    mutateAsync(id);
    deletePhoto(url);
    queryClient.invalidateQueries([queryKeys.getPortfolio]);
  };

  const [catValue, setCatValue] = useState(values.categories[0]);

  const filteredData = useMemo(
    () => data?.filter((review) => review.category === catValue),
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

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const disablePrevPage = currentPage === 1;
  const disableNextPage =
    filteredData &&
    currentPage === Math.ceil(filteredData.length / AdminPortfolioPageSize);

  useEffect(() => {
    filteredData &&
      setPaginatedData(
        filteredData.slice(
          (currentPage - 1) * AdminPortfolioPageSize,
          currentPage * AdminPortfolioPageSize
        )
      );
  }, [filteredData, currentPage]);

  return (
    <>
      <Styled.AdminCategoryBlock>
        <AdminDropDown
          size="primary"
          bannerClassName="admin-portfolio-dropdown"
          menu={values.categories}
          value={catValue}
          setValue={setCatValue}
        />
      </Styled.AdminCategoryBlock>
      <Styled.AdminReviewBlock>
        <SortableList onSortEnd={handleDragEnd} className="portfolio-grid">
          {(paginatedData &&
            paginatedData.length !== 0 &&
            paginatedData.map((review, idx) => (
              <SortableItem key={idx}>
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
              </SortableItem>
            ))) || <Styled.AdminSubTitle>no reviews</Styled.AdminSubTitle>}
        </SortableList>
        <Styled.AdminPortfolioPaginationWrapper>
          <Styled.AdminPortfolioLeftArrowButton
            className={disablePrevPage ? "disabled" : ""}
            onClick={!disablePrevPage ? handlePrevPage : () => {}}
          />
          <Styled.AdminPortfolioRightArrowButton
            className={disableNextPage ? "disabled" : ""}
            onClick={!disableNextPage ? handleNextPage : () => {}}
          />
        </Styled.AdminPortfolioPaginationWrapper>
      </Styled.AdminReviewBlock>
    </>
  );
};

export default EditReview;
