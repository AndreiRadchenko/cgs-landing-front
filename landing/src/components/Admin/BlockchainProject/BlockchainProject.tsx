import Image from "next/image";
import React from "react";
import * as Styled from "../../../styles/AdminBlockchainProject";
import AdminImage from "../Global/AdminImage";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import { IDataBlockchainResponse } from "../../../types/Admin/Response.types";
import { useFormikContext } from "formik";

interface IReviewProps {
  current: number;
  editTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  editFlag: boolean;
}

const BlockchainProject = ({
  current,
  editTrigger,
  editFlag,
}: IReviewProps) => {
  const { values } = useFormikContext<IDataBlockchainResponse>();

  const project = values.projects[current];

  const editTriggerFunc = () => {
    editTrigger((prev) => !prev);
  };

  return (
    <Styled.AdminBlockchainProjectFrame>
      <Styled.AdminBlockchainProjectContent>
        <Styled.ImageWrapper url={project.image?.url}></Styled.ImageWrapper>
        <Styled.BlockchainProjectParagraph>
          {project.text}
        </Styled.BlockchainProjectParagraph>
        <Styled.AdminSubTitle>{project.name}</Styled.AdminSubTitle>
      </Styled.AdminBlockchainProjectContent>

      <Styled.AdminDeleteTextThin>delete</Styled.AdminDeleteTextThin>

      <Styled.AdminEditIcon onClick={editTriggerFunc}>
        <Image
          src={editFlag ? edit : close}
          alt={editFlag ? "edit" : "close"}
        />
      </Styled.AdminEditIcon>
    </Styled.AdminBlockchainProjectFrame>
  );
};

export default BlockchainProject;
