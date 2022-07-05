import React, { useEffect, useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import arrowAdminFeedbackL from "../../../../public/arrowAdminFeedbackL.svg";
import arrowAdminFeedbackR from "../../../../public/arrowAdminFeedbackR.svg";
import Image from "next/image";
import { useFormikContext } from "formik";
import { IPortfolioData, IPortfolioReview } from "../../../types/Admin/AdminPortfolioPage.types";

interface ICarouselProps {
  page: number;
  setPage: (value: number) => void;
  length: number;
  catValue: string;
}

const PortfolioPageCarousel = ({
  page,
  setPage,
  length,
  catValue,
}: ICarouselProps) => {
  const { values } = useFormikContext<IPortfolioData>();
  const [nextPage, setNextPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);

  const categories = values.reviews.map(({ category }) => category);
  const max = categories.lastIndexOf(catValue);
  const min = values.reviews.findIndex((review) => review.category === catValue);

  const findNextPage = () => page !== max ? page + 1 : min;

  const findPrevPage = () => page !== min ? page - 1 : max;

  useEffect(() => {
    setNextPage(findNextPage());
    setPrevPage(findPrevPage());
  }, [page]);

  useEffect(() => {
    const currPage = values.reviews.findIndex(
      (review) => review.category === catValue
    );
    setPage(currPage);
  }, [catValue, length]);

  const pageUp = () => setPage(nextPage);
  const pageDown = () => setPage(prevPage);

  return (
    <div>
      <Styled.AdminFeedbackArrows>
        <Styled.AdminPointer onClick={pageDown}>
          <Image src={arrowAdminFeedbackL} alt={"left arrow"} />
        </Styled.AdminPointer>
        <Styled.AdminPointer onClick={pageUp}>
          <Image src={arrowAdminFeedbackR} alt={"right arrow"} />
        </Styled.AdminPointer>
      </Styled.AdminFeedbackArrows>
    </div>
  );
};

export default PortfolioPageCarousel;
