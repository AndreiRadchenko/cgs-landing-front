import React, { useCallback } from "react";

import * as Styles from "./PaginationBar.styled";

import { IPaginationBar } from "../../types/Components.types";

const PaginationBar = ({
  totalPages,
  currentPage,
  setCurrentPage,
  scrollFunction,
  setLoading,
  setIsFirstLoad,
}: IPaginationBar) => {
  const handleClick = (pageNumber: number) => {
    setIsFirstLoad(false);
    setLoading(true);
    setCurrentPage(pageNumber);
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
    <Styles.PaginationWrapper>
      <Styles.PaginationItemsWrapper>
        {totalPages &&
          Array.from(Array(totalPages).keys()).map((pageNumber) => (
            <Styles.PaginationItem
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={pageNumber + 1 === currentPage ? "active" : ""}
            >
              {pageNumber + 1}
            </Styles.PaginationItem>
          ))}
      </Styles.PaginationItemsWrapper>
    </Styles.PaginationWrapper>
  );
};

export default PaginationBar;
