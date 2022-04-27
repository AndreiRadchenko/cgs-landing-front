import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/AdminPage";
import AddLogoFrame from "./AddLogoFrame";
import LogoElement from "./LogoElement";

const AdminLogosBlock = ({ state }: { state: {images: any[]} }) => {
  const queryClient = useQueryClient();

  const deleteLogo = (id: number) => {
    state.images.splice(id, 1);
    queryClient.invalidateQueries(queryKeys.GetFullPage);
  }

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminSubTitle>Logos</Styled.AdminSubTitle>

      <Styled.AdminLogosGrid>
        <AddLogoFrame state={state} />
        {state.images.map((i, ind) => (
          <LogoElement image={i} key={Math.random()} deleteLogo={() => deleteLogo(ind)}  />
        ))}
      </Styled.AdminLogosGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminLogosBlock;
