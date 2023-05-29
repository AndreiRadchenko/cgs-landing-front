import React, { useEffect, useRef, useState } from "react";
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
import CalcAndChatContainer from "../CalcAndChatContainer";
import { PopupModal } from "react-calendly";
import { recoverLink } from "../../utils/recoverLink";

export interface ICalendlyUserData {
  name: string;
  email: string;
  link: string;
}

const Content = () => {
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
        {elRef && elRef.current && (
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
