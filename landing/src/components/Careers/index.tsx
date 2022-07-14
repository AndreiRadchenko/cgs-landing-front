import React, { FC } from "react";
import * as Styled from "./Careers.styled";
import CareersTicket from "../CareersTicket/index";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";

interface ITicketData {
  id: string;
  image: { url: string };
  vacancy: string;
}
const Careers: FC = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataCareersResponse>(
    queryKeys.getCareerPage
  );
  return (
    <>
      <Styled.MainTitle>
        <SplitBrackets text={data?.subtitle} />
      </Styled.MainTitle>
      <Styled.TicketWrapper>
        {data?.tickets.map(({ vacancy, id }: ITicketData) => (
          <CareersTicket route={true} id={id} vacancy={vacancy} key={vacancy} />
        ))}
      </Styled.TicketWrapper>
    </>
  );
};

export default Careers;
