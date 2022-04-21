import React from "react";
import * as Styled from "../../styles/AdminPage";
import AddLogoFrame from "./AddLogoFrame";
import LogoElement from "./LogoElement";

const AdminLogosBlock = ({ state }: { state: any[] }) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminSubTitle>Logos</Styled.AdminSubTitle>

      <Styled.AdminLogosGrid>
        <AddLogoFrame />
        {state.map((i) => (
          <LogoElement image={i} key={Math.random()} />
        ))}
      </Styled.AdminLogosGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminLogosBlock;
