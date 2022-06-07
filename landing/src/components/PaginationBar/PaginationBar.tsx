import React from "react";
import { ArrowContainer } from "../Feedback/Feedback.styled";
import LeftArrow from "../../../public/leftArrow";
import RightArow from "../../../public/rightArrow";

import * as Styles from "./PaginationBar.styled";

const PaginationBar = () => {
  return (
    <Styles.PaginationWrapper>
      <Styles.PaginationItemsWrapper>
        <Styles.PaginationItem>1</Styles.PaginationItem>
        <Styles.PaginationItem>2</Styles.PaginationItem>
        <Styles.PaginationItem>3</Styles.PaginationItem>
      </Styles.PaginationItemsWrapper>
      <ArrowContainer className="blog">
        <Styles.SwiperButton>
          <LeftArrow />
        </Styles.SwiperButton>
        <Styles.SwiperButton>
          <RightArow />
        </Styles.SwiperButton>
      </ArrowContainer>
    </Styles.PaginationWrapper>
  );
};

export default PaginationBar;
