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
    ? data.tickets.slice(2, 6).map(({ vacancy }) => vacancy)
    : [];

  positions.length && positions.push("None of the above");

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
          <Styles.TicketsContainer>
            {data?.tickets
              .slice(2, 6)
              .map(({ vacancy, stack, position, stars }, idx) => (
                <CareersTicket
                  stars={stars}
                  vacancy={vacancy}
                  key={idx}
                  stack={stack}
                  position={position}
                />
              ))}
          </Styles.TicketsContainer>
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
            <CareersForm positions={positions} />
          </Styles.Form>
          <Styles.FormImage src={MagnifiedGlass.src} alt="Magnified Glass" />
        </Styles.FormContainer>
      </Styles.CareersContainer>
    </>
  );
};

export default Careers;
