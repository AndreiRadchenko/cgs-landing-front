import React from "react";
import { useFormikContext } from "formik";
import * as Styled from "../../../styles/AdminPage";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import { IDataVacancyResponse } from "../../../types/Admin/Response.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";

const ContactBlock = () => {
  const { values, handleChange } = useFormikContext<IDataVacancyResponse>();
  const { form }: { [key: string]: any } = values.contact;
  const { CV, text, image, ...formInputs } = form;
  const deleteImageFunction = useDeleteImageFunction(form);
  const uploadImageFunction = useUploadImageFunction(form);
  const ent: Array<[string, string]> = Object.entries(formInputs);

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <div>
          <Styled.AdminSubTitle>Subtitle</Styled.AdminSubTitle>
          <Styled.AdminInput
            name="contact.title"
            minRows={3}
            placeholder="Subtitle"
            value={values.contact.title}
            onChange={handleChange}
          />
        </div>
      </Styled.AdminHalfGrid>
      <Styled.AdminHalfGrid>
        <div>
          <Styled.AdminHeader>ContactForm</Styled.AdminHeader>
          {ent.map((i, ind) => {
            return (
              <Styled.AdminInput
                key={`inputContact${ind}`}
                name={`contact.form.${i[0]}`}
                value={i[1]}
                onChange={handleChange}
              />
            );
          })}
          <Styled.AdminHalfGrid>
            {Object.keys(CV).map((i, ind) => {
              return (
                <div key={`inputContact${ind}`}>
                  <Styled.AdminInput
                    name={`contact.form.CV.${i}`}
                    value={CV[i]}
                    onChange={handleChange}
                  />
                </div>
              );
            })}
          </Styled.AdminHalfGrid>
        </div>
        <div>
          <div>
            <PhotoBlockDashed
              photo={image}
              deleteFlag={true}
              uploadFunction={(image) => uploadImageFunction(image)}
              deleteFunction={async () => (await deleteImageFunction)()}
            />
          </div>
        </div>
      </Styled.AdminHalfGrid>
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            name="contact.form.text"
            header="Text"
            inputValue={text}
            onChangeFunction={handleChange}
          />
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default ContactBlock;
