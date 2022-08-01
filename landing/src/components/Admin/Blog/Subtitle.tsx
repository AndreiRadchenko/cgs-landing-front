import { useFormikContext } from "formik";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import * as Styles from "../../../styles/AdminBlogPage";
import { AdminSubTitle } from "../../../styles/AdminPage";
import { adminBlogHeaders } from "../../../utils/variables";
import AdminDropDown from "../Global/AdminDropDown";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

interface ISubtitle {
  subNumberValue?: string;
  subtitleValue?: string;
  handleChange: (e?: string | ChangeEvent<any> | undefined) => void;
  subtitleName: string;
  subNumberName: string;
  tagName: string;
  tagNameValue?: string;
}

const Subtitle: FC<ISubtitle> = ({
  handleChange,
  subtitleName,
  subNumberName,
  subtitleValue,
  subNumberValue,
  tagName,
  tagNameValue,
}) => {
  const [header, setHeader] = useState<string>(tagNameValue || "h2");
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue(tagName, header);
  }, [header, setFieldValue, tagName]);

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
        <Styles.DropdownWrapper>
          <AdminSubTitle>Tag</AdminSubTitle>
          <AdminDropDown
            className="blog-admin"
            menu={adminBlogHeaders}
            value={header}
            setValue={setHeader}
          />
        </Styles.DropdownWrapper>
      </Styles.SubHeaderWrapper>
      <Styles.SubHeaderWrapper>
        <SubHeaderWithInput
          minRows={2}
          header="Subtitle"
          inputValue={subtitleValue as string}
          name={subtitleName}
          onChangeFunction={handleChange}
          isBlog={true}
          height="56px"
          width="665px"
        />
      </Styles.SubHeaderWrapper>
    </Styles.SubHeadersWrapper>
  );
};

export default Subtitle;
