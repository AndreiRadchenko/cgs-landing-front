import React, { ChangeEvent, FC } from "react";
import * as Styles from "../../../styles/AdminBlogPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

interface ISubtitle {
  subNumberValue?: string;
  subtitleValue?: string;
  handleChange: (e?: string | ChangeEvent<any> | undefined) => void;
  subtitleName: string;
  subNumberName: string;
}

const Subtitle: FC<ISubtitle> = ({
  handleChange,
  subtitleName,
  subNumberName,
  subtitleValue,
  subNumberValue,
}) => {
  console.log(subtitleValue);
  return (
    <Styles.SubHeadersWrapper>
      <Styles.SubHeaderWrapper>
        <SubHeaderWithInput
          header="Subtitle number"
          inputValue={subNumberValue as string}
          name={subNumberName}
          onChangeFunction={handleChange}
          isBlog={true}
          height="56px"
          width="213px"
        />
      </Styles.SubHeaderWrapper>
      <Styles.SubHeaderWrapper>
        <SubHeaderWithInput
          header="Subtitle"
          inputValue={subtitleValue as string}
          name={subtitleName}
          onChangeFunction={handleChange}
          isBlog={true}
          height="56px"
          width="865px"
        />
      </Styles.SubHeaderWrapper>
    </Styles.SubHeadersWrapper>
  );
};

export default Subtitle;
