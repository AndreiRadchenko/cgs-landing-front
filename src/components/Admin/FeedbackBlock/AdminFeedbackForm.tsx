import { Form, useFormikContext } from "formik";
import React from "react";
import usePushFeedback from "../../../hooks/usePushFeedback";
import * as Styled from "../../../styles/AdminPage";
import { IFeedback } from "../../../types/Admin/Response.types";
import AdminStars from "./AdminStars";

interface IFeedbackFormProps {
  submit: () => void;
  isNewFeedback: boolean;
}

const AdminFeedbackForm = ({ submit, isNewFeedback }: IFeedbackFormProps) => {
  const { submitFunc } = usePushFeedback();
  const { values, handleChange } = useFormikContext<IFeedback>();
  const starsChange = (newValue: number) => (values.stars = newValue);
  const submitForm = (e: React.SyntheticEvent) => submitFunc(e, submit);

  return (
    <Form>
      <div>
        <Styled.AdminStarsGrid>
          <Styled.AdminInput
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          <Styled.AdminStarsFlex>
            <AdminStars
              value={values.stars}
              handleChange={starsChange}
              size={38}
              edit={true}
            />
          </Styled.AdminStarsFlex>
        </Styled.AdminStarsGrid>
        <div>
          <Styled.AdminInput
            name="companyName"
            placeholder="Company"
            value={values.companyName}
            onChange={handleChange}
          />
          <Styled.AdminInput
            name="role"
            placeholder="Position"
            value={values.role}
            onChange={handleChange}
          />
          <Styled.AdminInput
            name="text"
            placeholder="Text"
            value={values.text}
            onChange={handleChange}
          />

          <Styled.AdminBigButton type="submit" onClick={submitForm}>
            {isNewFeedback ? "Add Review" : "Save changes"}
          </Styled.AdminBigButton>
        </div>
      </div>
    </Form>
  );
};

export default AdminFeedbackForm;
