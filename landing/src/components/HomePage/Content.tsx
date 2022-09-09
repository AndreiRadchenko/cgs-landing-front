import React from "react";
import { Separator } from "../../styles/HomePage/General.styled";
import HeadBlock from "./HeadBlock";
import NextTech from "./NextTech";
import CarouselFeedback from "../Feedback/CarouselFeedback";
import Technologies from "../Technologies/Technologies";
import CardsBlock from "../CardsBlock";
import BookBlock from "../BookBlock";
import { Layout } from "../../styles/Layout.styled";

const Content = () => {
  return (
    <>
      <Layout className="hidden">
        <HeadBlock />
        <NextTech />
      </Layout>
      <Separator />
      <Layout className="hidden">
        <CarouselFeedback />
        <Technologies />
        <CardsBlock />
        <BookBlock />
      </Layout>
    </>
  );
};

export default Content;
