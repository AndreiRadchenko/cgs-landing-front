import React from "react";
// import Image from "next/image";

import * as Styled from "./ListItem.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";

export const ListItem = ({ info }: any) => {
  return (
    <Styled.ListItemWrapper>
      <Styled.ListItemTitle>
        <Styled.ListItemName></Styled.ListItemName>
        <Styled.ListItemPosition></Styled.ListItemPosition>
      </Styled.ListItemTitle>
      {/* <Styled.ListItemLink
        isProjectLink={!!project.button}
        isInfoCont={false}
      >
        {project.button ? (
          <a href={project.button} target="_blank" rel="noreferrer">
            project link
          </a>
        ) : (
          <span>NDA</span>
        )}
        <Styled.ProjectsContainerArrowContainer
          isProjectLink={!!project.button}
        >
          <ButtonArrow />
        </Styled.ProjectsContainerArrowContainer>
      </Styled.ListItemLink> */}
    </Styled.ListItemWrapper>
  );
};
