import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/AdminPage";
import AddLogoFrame from "./AddLogoFrame";
import LogoElement from "./LogoElement";

interface ILocalState {
  images: any[];
}

interface IRenderProps {
  state: ILocalState;
  deleteLogo: (ind: number) => void;
}

const render = ({ state, deleteLogo }: IRenderProps) => {
  return state.images.map((i, ind) => (
    <LogoElement
      image={i}
      key={Math.random()}
      deleteLogo={() => deleteLogo(ind)}
    />
  ));
};

const AdminLogosBlock = ({ state }: { state: { images: any[] } }) => {
  const queryClient = useQueryClient();

  const deleteLogo = (id: number) => {
    state.images.splice(id, 1);
    queryClient.invalidateQueries(queryKeys.GetFullPage);
  };

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminSubTitle>Logos</Styled.AdminSubTitle>
      <Styled.AdminLogosGrid>
        <AddLogoFrame state={state} />
        {render({ state, deleteLogo })}
      </Styled.AdminLogosGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminLogosBlock;
