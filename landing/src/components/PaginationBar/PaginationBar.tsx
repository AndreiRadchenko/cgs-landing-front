import React, { useCallback, useEffect } from "react";
import * as Styles from "./PaginationBar.styled";
interface IPaginationBar {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  scrollFunction: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaginationBar = ({
  totalPages,
  currentPage,
  setCurrentPage,
  scrollFunction,
  setLoading,
}: IPaginationBar) => {
  const handleClick = (pageNumber: number) => {
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
