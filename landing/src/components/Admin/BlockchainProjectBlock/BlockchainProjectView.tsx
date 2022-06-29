import Image from "next/image";
import React from "react";
import * as Styled from "../../../styles/AdminBlockchainProject";
import edit from "../../../../public/whiteEditIcon.svg";
import close from "../../../../public/bigClose.svg";
import { IDataBlockchainResponse } from "../../../types/Admin/Response.types";
import { useFormikContext } from "formik";

interface IReviewProps {
  current: number;
  editTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  editFlag: boolean;
}

const BlockchainProjectView = ({
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
    <Styled.ProjectFrame>
      <Styled.ProjectContent>
        <Styled.ImageBlock>
          <Styled.ProjectImage src={project.image?.url} />
          <Styled.ProjectDescription>
            <Styled.ProjectParagraph>{project.text}</Styled.ProjectParagraph>
          </Styled.ProjectDescription>
        </Styled.ImageBlock>
        <Styled.ProjectTitle>{project.name}</Styled.ProjectTitle>
      </Styled.ProjectContent>

      <Styled.DeleteTextThin>delete</Styled.DeleteTextThin>

      <Styled.EditIcon onClick={editTriggerFunc}>
        <Image
          src={editFlag ? edit : close}
          alt={editFlag ? "edit" : "close"}
        />
      </Styled.EditIcon>
    </Styled.ProjectFrame>
  );
};

export default BlockchainProjectView;
