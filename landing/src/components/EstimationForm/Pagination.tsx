import React, { Dispatch, SetStateAction } from "react";
import {
  EstimationPaginationContainer,
  EstimationPaginationPage,
} from "../../styles/EstimationForm.styled";

const Pagination = ({
  pageCount,
  currentPage,
  setPage,
}: {
  pageCount: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const paginatioPages = Array.from(Array(pageCount).keys());

  return (
    <EstimationPaginationContainer>
      {paginatioPages.map((page) => (
        <EstimationPaginationPage
          key={page}
          style={{
            background: `${page + 1 === currentPage ? "#000" : "transparent"}`,
            color: `${page + 1 === currentPage ? "#fff" : "#000"}`,
          }}
          onClick={() => currentPage > page + 1 && setPage(page + 1)}
        >
          {page + 1}
        </EstimationPaginationPage>
      ))}
    </EstimationPaginationContainer>
  );
};

export default Pagination;
