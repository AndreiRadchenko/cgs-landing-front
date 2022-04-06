import React, { FC } from "react";
import * as Styled from "./Careers.styled";
import CareersTicket from "../CareersTicket/index";
import mockData from "../../mock/CareersTickets";
import HeaderNav from "../HeaderNav/HeaderNav";
import * as Global from "../../styles/Page.styled";

interface ITicketData {
  imageURL: string;
  vacancy: string;
}
const Careers: FC = () => {
  return (
    <Global.Page>
      <HeaderNav />
      <Styled.MainTitle>
        Take your ticket <br />
        and enjoy the journey!
      </Styled.MainTitle>
      <Styled.TicketWrapper>
        {mockData.map(({ imageURL, vacancy }: ITicketData) => (
          <CareersTicket vacancy={vacancy} imgUrl={imageURL} key={imageURL} />
        ))}
      </Styled.TicketWrapper>
    </Global.Page>
  );
};

export default Careers;
