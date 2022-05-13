import React from "react";
import * as Styled from "./pagination.styles";

const Pagination = ({
  currentPage,
  handleDecrease,
  paginationArray,
  setCurrentPage,
  numberOfPages,
  handleIncrease,
}) => (
  <nav className="pagination">
    <Styled.PaginationList>
      {currentPage > 1 && (
        <Styled.PageLink onClick={handleDecrease}>
          <a>Prev</a>
        </Styled.PageLink>
      )}
      {paginationArray.map((_, i) => {
        return (
          <Styled.PageLink
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            active={currentPage === i + 1}
          >
            <a>{i + 1}</a>
          </Styled.PageLink>
        );
      })}
      {currentPage < numberOfPages && (
        <Styled.PageLink onClick={handleIncrease}>
          <a>Next</a>
        </Styled.PageLink>
      )}
    </Styled.PaginationList>
  </nav>
);

export default Pagination;
