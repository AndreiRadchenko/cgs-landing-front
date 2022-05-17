import Image from "next/image";
import React, { useState } from "react";
import * as Styled from "../../styles/Projects.styled";

interface IProjectProps {
  ind: string;
  image: { url: any };
  title: string;
  link: string;
  description: string;
}

const ProjectItem = ({
  ind,
  image,
  title,
  link,
  description,
}: IProjectProps) => {
  const [isVisible, setIsVisible] = useState(0);

  const handleOver = () => {
    setIsVisible(1);
  };

  const handleLeave = () => {
    setIsVisible(0);
  };

  return (
    <Styled.ProjectItemWrapper
      className={ind === "active" ? "" : `${ind}Gradient`}
    >
      <Styled.HoverBlock onMouseOver={handleOver} onMouseLeave={handleLeave}>
        <Styled.ImageWrapper isVisible={isVisible}>
          <Image src={image.url} alt={title} />
        </Styled.ImageWrapper>
        <Styled.PhotoText isVisible={isVisible}>{description}</Styled.PhotoText>
      </Styled.HoverBlock>
      <Styled.TitleLink href={link}>
        <Styled.BottomTitle>{title}</Styled.BottomTitle>
      </Styled.TitleLink>
    </Styled.ProjectItemWrapper>
  );
};

export default ProjectItem;
