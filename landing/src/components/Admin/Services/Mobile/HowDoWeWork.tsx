import { useFormikContext } from "formik";
import React from "react";
import { AdminSubTitle } from "../../../../styles/AdminBlogPage";
import {
  AdminHalfGrid,
  AdminInput,
  AdminPaddedBlock,
  AdminQuaterGrid,
} from "../../../../styles/AdminPage";
import { IServiceMobile } from "../../../../types/Admin/Response.types";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

const HowDoWeWork = () => {
  const { values, handleChange } = useFormikContext<IServiceMobile>();
  return (
    <AdminPaddedBlock theme="dark">
      <AdminHalfGrid>
        <SubHeaderWithInput
          header="Subtitle"
          inputValue={values.howDoWeWork.subtitle}
          onChangeFunction={handleChange}
          name="howDoWeWork.subtitle"
        />
      </AdminHalfGrid>
      <AdminQuaterGrid>
        {Object.entries(values.howDoWeWork.text).map((el, idx) => {
          return (
            <div key={`howDoWeWork ${idx}`}>
              <AdminSubTitle>Subtitle {idx + 1}</AdminSubTitle>
              {Object.entries(el[1]).map((inputEl) => (
                <AdminInput
                  key={`howDoWeWork ${inputEl[0]} ${idx}`}
                  value={inputEl[1]}
                  name={`howDoWeWork.text.${el[0]}.${inputEl[0]}`}
                  onChange={handleChange}
                />
              ))}
            </div>
          );
        })}
      </AdminQuaterGrid>
    </AdminPaddedBlock>
  );
};

export default HowDoWeWork;
