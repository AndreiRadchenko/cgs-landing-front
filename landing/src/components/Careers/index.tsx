import React, { FC } from "react";
import * as Styles from "./Careers.styled";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import Arrow from "../../../public/arrowRight.svg";
import MagnifiedGlass from "../../../public/magnifiedGlass.svg";
import CareersTicket from "../../components/CareersTicket";
import CareersForm from "../CareersForm";

interface ICareersProps {
  data: IDataCareersResponse;
}
const Careers: FC<ICareersProps> = ({ data }) => {
  const positions = data?.tickets?.length
    ? data.tickets
        .slice(0, 4)
        .map(({ vacancy, position }) => `${position} ${vacancy}`)
    : [];

  positions.length && positions.push("None of the above");

  const mapTickets = () => {
    return data?.tickets
      .slice(0, 4)
      .map((ticket, idx) => <CareersTicket ticket={ticket} key={idx} />);
  };

  return (
    <>
      <Styles.CareersContainer>
        <Styles.Title>
          <Styles.TitleText>NEXT-GENERATION</Styles.TitleText>
          <Styles.TitleArrow src={Arrow.src} alt="Arrow" />
          <Styles.TitleText>PROJECTS REQUIRE AN&nbsp;</Styles.TitleText>
          <Styles.TitleText>OUTSTANDING TEAM.</Styles.TitleText>
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
        <Styles.FormContainer>
          <Styles.FormContainer3D />
          <Styles.Form>
            <CareersForm positions={positions} data={data} />
          </Styles.Form>
          <Styles.FormImage src={MagnifiedGlass.src} alt="Magnified Glass" />
        </Styles.FormContainer>
      </Styles.CareersContainer>
    </>
  );
};

export default Careers;
