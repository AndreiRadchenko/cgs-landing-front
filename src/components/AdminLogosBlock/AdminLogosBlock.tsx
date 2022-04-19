import React from "react";
import * as Styled from "../../styles/AdminPage";
import AddLogoFrame from "./AddLogoFrame";
import LogoElement from "./LogoElement";
import { logos } from "./logos";

const AdminLogosBlock = () => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminBlockSubTitle>Logos</Styled.AdminBlockSubTitle>

      <Styled.AdminLogosGrid>
        <AddLogoFrame />
        {logos.map((i) => (
          <LogoElement image={i} key={Math.random()} />
        ))}
      </Styled.AdminLogosGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminLogosBlock;
