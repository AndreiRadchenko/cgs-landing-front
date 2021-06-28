import { components } from "react-select";

import { slides } from "../../../img";

import * as Styled from "./Option.styles";

export const Option = (props: any) => {
  const deleteTag = () => {
    props.deleteTag(props.value);
  };

  return (
    <Styled.Container>
      <components.Option {...props} />
      <Styled.DeleteButton onClick={deleteTag}>
        <img src={slides.deleteIcon} alt="Delete tag button" />
      </Styled.DeleteButton>
    </Styled.Container>
  );
};
