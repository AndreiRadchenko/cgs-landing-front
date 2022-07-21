import React, { FC } from "react";
import * as Styles from "./Careers.styled";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import Arrow from "../../../public/arrowRight.svg";
import MagnifiedGlass from "../../../public/magnifiedGlass.svg";
import CareersTicket from "../../components/CareersTicket";
import CareersForm from "../CareersForm";
import { useScrollTo } from "../../hooks/useScrollTo";

interface ICareersProps {
  data: IDataCareersResponse;
}
const Careers: FC<ICareersProps> = ({ data }) => {
  const [ref, scrollTo] = useScrollTo<HTMLDivElement>();
  const positions = data?.tickets?.length
    ? data.tickets.map(({ vacancy, position }) => `${position} ${vacancy}`)
    : [];

  positions.length && positions.push("None of the above");

  const mapTickets = () => {
    return data?.tickets.map((ticket, idx) => (
      <CareersTicket scrollTo={scrollTo} ticket={ticket} key={idx} />
    ));
  };

  return (
    <>
      <Styles.CareersContainer>
        <Styles.Title>
          <Styles.TitleTextRow>
            <Styles.TitleText>NEXT-GENERATION</Styles.TitleText>
            <Styles.ArrowContainer>
              <Styles.TitleArrow src={Arrow.src} alt="Arrow" />
            </Styles.ArrowContainer>
            <Styles.TitleText>PROJECTS</Styles.TitleText>
          </Styles.TitleTextRow>
          <Styles.TitleTextRow>
            <Styles.TitleText>REQUIRE AN&nbsp;</Styles.TitleText>
            <Styles.TitleText className={"blue"}>
              OUTSTANDING TEAM.
            </Styles.TitleText>
          </Styles.TitleTextRow>
        </Styles.Title>
        <Styles.TicketsWrapper>
          <Styles.TicketsContainer>{mapTickets()}</Styles.TicketsContainer>
        </Styles.TicketsWrapper>
        <Styles.Separator />
        <Styles.FormTitle>
          &lt;&nbsp;Found your dream-job?
          <br />
          Let us discover you!&nbsp;&gt;
        </Styles.FormTitle>
        <Styles.FormAndImageContainer>
          <Styles.FormContainer>
            <Styles.FormContainer3D>
              <Styles.TopCorner />
              <Styles.BottomCorner />
            </Styles.FormContainer3D>
            <Styles.Form>
              <CareersForm positions={positions} data={data} ourRef={ref} />
            </Styles.Form>
          </Styles.FormContainer>
          <Styles.FormImage src={MagnifiedGlass.src} alt="Magnified Glass" />
        </Styles.FormAndImageContainer>
      </Styles.CareersContainer>
    </>
  );
};

export default Careers;
