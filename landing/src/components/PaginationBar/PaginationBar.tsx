import React, { FC } from "react";
import * as Styles from "./PaginationBar.styled";
import { usePagination } from "../../hooks/usePagination";

interface IPaginationBar {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

const DOTS = "...";

const PaginationBar: FC<IPaginationBar> = ({
  totalCount,
  pageSize,
  currentPage,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  return (
    <Styles.PaginationWrapper>
      <Styles.PaginationItemsWrapper>
        {paginationRange?.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <Styles.Dots className="pagination-item dots" key={pageNumber}>
                {DOTS}
              </Styles.Dots>
            );
          }
          return currentPage === pageNumber ? (
            <Styles.CurrentPaginationItem key={pageNumber}>
              {pageNumber}
            </Styles.CurrentPaginationItem>
          ) : (
            <a href={`/blog?page=${pageNumber}`} key={pageNumber}>
              <Styles.PaginationItem>{pageNumber}</Styles.PaginationItem>
            </a>
          );
        })}
      </Styles.PaginationItemsWrapper>
    </Styles.PaginationWrapper>
  );
};

export default PaginationBar;
