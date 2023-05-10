import React, { useState, FC } from "react";
import parse from "html-react-parser";
import { useCollapse } from "react-collapsed";
import * as Styles from "./question.styles";

interface IQuestionProps {
  title: string;
  image: { url: string } | null;
  content: string;
}

const Question: FC<IQuestionProps> = ({ title, content, image }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { getToggleProps, getCollapseProps } = useCollapse({
    easing: "linear",
    isExpanded: isOpen,
    collapsedHeight: 0,
  });

  return (
    <Styles.QuestionBox isOpen={isOpen}>
      <Styles.QuestionContainer isOpen={isOpen}>
        <Styles.QuestionTitleContainer
          className={isOpen ? "open" : ""}
          isOpen={isOpen}
          {...getToggleProps({ onClick: () => setIsOpen(!isOpen) })}
        >
          <Styles.QuestionTitle isOpen={isOpen}>{title}</Styles.QuestionTitle>
          <Styles.TogglePlus>{isOpen ? "-" : "+"}</Styles.TogglePlus>
        </Styles.QuestionTitleContainer>
        <div {...getCollapseProps()}>
          <Styles.QuestionContentContainer isOpen={isOpen}>
            <Styles.QuestionTextContainer>
              {parse(content)}
            </Styles.QuestionTextContainer>
            {image?.url && <Styles.QuestionImage src={image.url} />}
          </Styles.QuestionContentContainer>
        </div>
      </Styles.QuestionContainer>
    </Styles.QuestionBox>
  );
};

export default Question;
