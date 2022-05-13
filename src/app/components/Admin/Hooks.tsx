import React, { useState, useEffect } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};

const usePagination = (givenData, perPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = Math.ceil(givenData.length / perPage);
  let paginationArray = Array(numberOfPages).fill("");

  let paginatedDataMarkUp;

  if (!givenData) {
    return <h1>loading..</h1>;
  }

  if (givenData) {
    paginatedDataMarkUp = givenData.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );
  }

  const handleDecrease = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleIncrease = () => {
    setCurrentPage((page) => page + 1);
  };

  return [
    paginatedDataMarkUp,
    currentPage,
    handleDecrease,
    handleIncrease,
    numberOfPages,
    paginationArray,
    setCurrentPage,
  ];
};

export default usePagination;
