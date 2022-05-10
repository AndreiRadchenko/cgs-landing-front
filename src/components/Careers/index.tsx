import React, { FC } from "react";
import * as Styled from "./Careers.styled";
import CareersTicket from "../CareersTicket/index";
import mockData from "../../mock/CareersTickets";

interface ITicketData {
  imageURL: string;
  vacancy: string;
}
const Careers: FC = () => {
  return (
    <>
      <Styled.MainTitle>
        Take your ticket <br />
        and enjoy the journey!
      </Styled.MainTitle>
      <Styled.TicketWrapper>
        {mockData.map(({ imageURL, vacancy }: ITicketData) => (
          <CareersTicket
            vacancy={vacancy}
            imgUrl={imageURL}
            route={true}
            key={imageURL}
          />
        ))}
      </Styled.TicketWrapper>
    </>
  );
};

export default Careers;
