import React from "react";
import * as Styled from "../../styles/AdminPage";
import AddLogoFrame from "./AddLogoFrame";
import LogoElement from "./LogoElement";

const AdminLogosBlock = ({ state }: { state: {images: any[]} }) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminSubTitle>Logos</Styled.AdminSubTitle>

      <Styled.AdminLogosGrid>
        <AddLogoFrame />
        {state.images.map((i) => (
          <LogoElement image={i} key={Math.random()} />
        ))}
      </Styled.AdminLogosGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminLogosBlock;
