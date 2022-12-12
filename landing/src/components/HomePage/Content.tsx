import React from "react";
import {
  LocalLayout,
  MobileReverseLayout,
  Separator,
} from "../../styles/HomePage/General.styled";
import HeadBlock from "./HeadBlock";
import NextTech from "./NextTech";
import CarouselFeedback from "../Feedback/CarouselFeedback";
import Technologies from "../Technologies/Technologies";
import CardsBlock from "../CardsBlock";
import BookBlock from "../BookBlock";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import MobilePartners from "../Partners/MobilePartners";
import MobileNextTech from "./MobileNextTech";
import Calculator from "../Calculator";

const Content = () => {
  return (
    <>
      <Calculator />
      <PageArticle>
        <Layout>
          <LocalLayout>
            <HeadBlock />
            <NextTech />
            <MobileNextTech />
          </LocalLayout>
        </Layout>
        <Separator />
        <Layout>
          <LocalLayout>
            <MobileReverseLayout>
              <CarouselFeedback />
              <Technologies />
            </MobileReverseLayout>
            <CardsBlock />
            <BookBlock />
            <MobilePartners />
          </LocalLayout>
        </Layout>
      </PageArticle>
    </>
  );
};

export default Content;
