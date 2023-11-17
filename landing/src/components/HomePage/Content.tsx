import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@mui/material";

import {
  LocalLayout,
  MobileReverseLayout,
} from "../../styles/HomePage/General.styled";
import HeadBlock from "./HeadBlock";

import CarouselFeedback from "../Feedback/CarouselFeedback";
import Technologies from "../Technologies/Technologies";
import CardsBlock from "../CardsBlock";
import BookBlock from "../BookBlock";
import CalcAndChatContainer from "../CalcAndChatContainer";

import { PopupModal } from "react-calendly";

const NextTech = dynamic(() => import("./NextTech"));
const MobilePartners = dynamic(() => import("../Partners/MobilePartners"));
const MobileNextTech = dynamic(() => import("./MobileNextTech"));

import { Layout, PageArticle } from "../../styles/Layout.styled";

import { recoverLink } from "../../utils/recoverLink";

import { ICalendlyUserData } from "../../types/ModalCategory.types";

const Content = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [calendlyUserData, setCalendlyUserData] = useState<ICalendlyUserData>({
    name: "",
    email: "",
    link: "",
  });
  const elRef = useRef<HTMLAnchorElement>(null);

  const handleClear = () => {
    setIsCalendlyOpen(false);
    setCalendlyUserData({
      name: "",
      email: "",
      link: "",
    });
  };

  return (
    <>
      <PageArticle ref={elRef}>
        {isCalendlyOpen && elRef.current && (
          <PopupModal
            prefill={{
              email: calendlyUserData.email,
              name: calendlyUserData.name,
            }}
            url={recoverLink(calendlyUserData.link)}
            rootElement={elRef.current}
            onModalClose={handleClear}
            open={isCalendlyOpen}
          />
        )}
        <CalcAndChatContainer
          setIsCalendlyOpen={setIsCalendlyOpen}
          setCalendlyUserData={setCalendlyUserData}
          isCalendlyOpen={isCalendlyOpen}
        />
        <Layout>
          <LocalLayout>
            <HeadBlock />
            {isMobile ? <MobileNextTech /> : <NextTech />}
          </LocalLayout>
        </Layout>
        <Layout>
          <LocalLayout>
            <MobileReverseLayout>
              <CarouselFeedback />
              <Technologies />
            </MobileReverseLayout>
            <CardsBlock />
            <BookBlock />
            {isMobile && <MobilePartners />}
          </LocalLayout>
        </Layout>
      </PageArticle>
    </>
  );
};

export default Content;
