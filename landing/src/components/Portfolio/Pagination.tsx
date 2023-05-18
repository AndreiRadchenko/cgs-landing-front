import React, { useCallback } from "react";

import * as Styles from "../../styles/Portfolio.styled";
import { IPaginationProps } from "../../types/Admin/AdminPortfolio.types";

export const Pagination = ({
  reviewsData,
  currentPage,
  setCurrentPage,
  scrollFunction,
  setIsFirstLoad,
  setIsPaginationTriggered,
}: IPaginationProps) => {
  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setIsFirstLoad(false);
    setIsPaginationTriggered(true);
    scrollFunction();
  };

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      if (pageNumber + 1 !== currentPage) {
        handleClick(pageNumber + 1);
      }
    },
    [handleClick, currentPage]
  );

  return (
    <Styles.PortfolioPaginationWrapper>
      <Styles.PortfolioPaginationItemsWrapper>
        {reviewsData &&
          Array.from(Array(reviewsData.totalPages).keys()).map((pageNumber) => (
            <Styles.PortfolioPaginationButton
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={pageNumber + 1 === currentPage ? "active" : ""}
            >
              {pageNumber + 1}
            </Styles.PortfolioPaginationButton>
          ))}
      </Styles.PortfolioPaginationItemsWrapper>
    </Styles.PortfolioPaginationWrapper>
  );
};
