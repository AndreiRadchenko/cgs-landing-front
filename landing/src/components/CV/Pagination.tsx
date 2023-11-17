import React, { useCallback, useMemo } from "react";

import * as Styles from "../../styles/CV/DevsInfo.styled";

import { IPaginationProps } from "../../types/Admin/AdminCv.types";

export const Pagination = ({
  cvData = { cvs: [], totalPages: 0, currentPage: 0 },
  currentPage,
  setCurrentPage,
  scrollFunction,
  setIsFirstLoad,
  setIsPaginationTriggered,
}: IPaginationProps) => {
  const handleClick = (pageNumber: number) => {
    scrollFunction();
    setIsPaginationTriggered(true);
    setCurrentPage(pageNumber);
    setIsFirstLoad(false);
  };

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      if (pageNumber !== currentPage) {
        handleClick(pageNumber);
        Styles;
      }
    },
    [handleClick, currentPage]
  );

  const pagesArray = useMemo(() => {
    const totalPages = cvData.totalPages;

    if (totalPages <= 9) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 5) {
      return [1, 2, 3, 4, 5, 6, 7, "...", totalPages];
    }

    if (currentPage >= totalPages - 4) {
      return [
        1,
        "...",
        totalPages - 6,
        totalPages - 5,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      "...",
      totalPages,
    ];
  }, [cvData.totalPages, currentPage]);

  return (
    <Styles.PortfolioPaginationWrapper className="cv">
      <Styles.PortfolioPaginationItemsWrapper>
        {pagesArray.map((pageNumber, index) =>
          typeof pageNumber === "number" ? (
            <Styles.PortfolioPaginationButton
              key={index}
              onClick={() => handlePageClick(pageNumber)}
              className={pageNumber === currentPage ? "active" : ""}
            >
              {pageNumber}
            </Styles.PortfolioPaginationButton>
          ) : (
            <Styles.PortfolioPaginationDots key={index}>
              {pageNumber}
            </Styles.PortfolioPaginationDots>
          )
        )}
      </Styles.PortfolioPaginationItemsWrapper>
    </Styles.PortfolioPaginationWrapper>
  );
};
