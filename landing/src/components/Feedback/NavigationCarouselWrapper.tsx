import React, { FC } from "react";
import LeftArrow from "../../../public/leftArrow";
import RightArow from "../../../public/rightArrow";
import { IFeedbackBlock } from "../../types/Admin/Response.types";
import Feedback from "./Feedback";
import { ArrowContainer, Navigationwrapper } from "./Feedback.styled";

interface INavigationCarouselWrapper {
  data?: IFeedbackBlock;
}

const NavigationCarouselWrapper: FC<INavigationCarouselWrapper> = ({
  data,
}) => {
  return (
    <Navigationwrapper>
      <Feedback title={data?.subtitle} subtitle={data?.text3} />
      <ArrowContainer>
        <div className="swiper-button-prev">
          <LeftArrow />
        </div>
        <div className="swiper-button-next">
          <RightArow />
        </div>
      </ArrowContainer>
    </Navigationwrapper>
  );
};

export default NavigationCarouselWrapper;
