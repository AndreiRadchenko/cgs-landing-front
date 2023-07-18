import React, { FC, useRef } from "react";
import * as Styles from "./Careers.styled";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import leftGlass from "../../../public/CareerDecorations/leftGlass.svg";
import rightGlass from "../../../public/CareerDecorations/rightGlass.svg";
import topRightText from "../../../public/CareerDecorations/topText.svg";
import bottomLeftText from "../../../public/CareerDecorations/bottomLeftText.svg";
import bottomRightText from "../../../public/CareerDecorations/bottomRightText.svg";
import CareersTicket from "../../components/CareersTicket";
import CareersForm from "../CareersForm";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import Image from "next/image";
import * as CSS from "../../styles/Portfolio/title.styled";
import longArrow from "../../../public/HomePageDecoration/longArrow.svg";
import shortArrow from "../../../public/HomePageDecoration/longArrow.svg";
import { useMediaQuery } from "@mui/material";

interface ICareersProps {
  data: IDataCareersResponse;
}
const Careers: FC<ICareersProps> = ({ data }) => {
  const is768px = useMediaQuery("(max-width: 768px)");
  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = () => {
    if (ref && ref.current) {
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
      const secondLineTop = rect.top + lineHeight - 150;

      window.scroll({
        top: window.pageYOffset + secondLineTop,
        behavior: "smooth",
      });
    }
  };
  const positions = data?.tickets?.length
    ? data.tickets.map(({ vacancy, position }) => `${position} ${vacancy}`)
    : [];

  positions.length && positions.push("None of the above");

  const subtitle = data?.subtitle;
  const subtitle2 = data?.subtitle2;

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(221, 105, 88)")
      ) {
        return (
          <>
            <CSS.ArrowWrapper>
              <Image
                src={longArrow.src}
                alt="wide tech long arrow"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
              />
            </CSS.ArrowWrapper>
          </>
        );
      }
    },
  };

  const options2: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(221, 105, 88)")
      ) {
        return (
          <>
            <CSS.ShortArrowWrapper>
              <Image
                src={shortArrow.src}
                alt="wide tech long arrow"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
              />
            </CSS.ShortArrowWrapper>
          </>
        );
      }
    },
  };

  const mapTickets = () => {
    return data?.tickets.map((ticket, idx) => (
      <CareersTicket scrollTo={scrollTo} ticket={ticket} key={idx} />
    ));
  };

  return (
    <Styles.Layout>
      <Styles.CareersContainer>
        <Styles.TopRightImageText src={topRightText.src} />
        <Styles.BottomRightImageText src={bottomRightText.src} />
        <Styles.BottomRightImageGlass src={rightGlass.src} />
        <Styles.Title>{data && parse(subtitle, options)}</Styles.Title>
        <Styles.TicketsWrapper>
          <Styles.TicketsContainer>{mapTickets()}</Styles.TicketsContainer>
        </Styles.TicketsWrapper>
        {is768px ? (
          <Styles.FormTitle ref={ref} className="mobile">
            <h5>{"<"}</h5>
            {data && parse(subtitle2, options2)}
            <h4>{">"}</h4>
          </Styles.FormTitle>
        ) : (
          <Styles.FormTitle ref={ref}>
            {data && parse(subtitle2, options2)}
          </Styles.FormTitle>
        )}
        <Styles.FormAndImageContainer>
          <Styles.BottomLeftImageText src={bottomLeftText.src} />
          <Styles.BottomLeftImageGlass src={leftGlass.src} />
          <Styles.FormContainer>
            <Styles.Form>
              <CareersForm positions={positions} data={data} />
            </Styles.Form>
          </Styles.FormContainer>
        </Styles.FormAndImageContainer>
      </Styles.CareersContainer>
    </Styles.Layout>
  );
};

export default Careers;
