import React, { FC, useEffect } from "react";
import LeftArrow from "../../../public/leftArrow";
import RightArow from "../../../public/rightArrow";

import * as Styles from "./PaginationBar.styled";
import { usePagination, DOTS } from "../../hooks/usePagination";

interface IPaginationBar {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  onPageChange: (page: string | number) => void;
}

const PaginationBar: FC<IPaginationBar> = ({
  currentPage,
  totalCount,
  pageSize,
  siblingCount = 1,
  onPageChange,
}) => {
  const paginationRange: (string | number)[] | undefined = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    onPageChange,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage: string | number = 0;

  if (paginationRange) lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Styles.PaginationWrapper>
      <Styles.PaginationItemsWrapper>
        {paginationRange?.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <Styles.Dots className="pagination-item dots">{DOTS}</Styles.Dots>
            );
          }
          return currentPage === pageNumber ? (
            <Styles.CurrentPaginationItem
              onClick={() => onPageChange(pageNumber)}
              key={pageNumber}
            >
              {pageNumber}
            </Styles.CurrentPaginationItem>
          ) : (
            <Styles.PaginationItem
              onClick={() => onPageChange(pageNumber)}
              key={pageNumber}
            >
              {pageNumber}
            </Styles.PaginationItem>
          );
        })}
      </Styles.PaginationItemsWrapper>
    </Styles.PaginationWrapper>
  );
};

export default PaginationBar;
