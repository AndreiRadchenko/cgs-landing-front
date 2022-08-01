import React, { ChangeEvent } from "react";
import { Form, useFormikContext } from "formik";
import usePushFeedback from "../../../hooks/usePushFeedback";
import * as Styled from "../../../styles/AdminPage";
import { IFeedback } from "../../../types/Admin/Response.types";
import { firstLetterToUpperCase } from "../../../utils/firstLetterToUpperCase";
import AdminStars from "./AdminStars";

interface IFeedbackFormProps {
  submit: () => void;
  isNewFeedback: boolean;
}

interface IRenderState {
  companyName: string;
  text: string;
}

const render = (
  state: IRenderState,
  change: (e: string | ChangeEvent<HTMLElement>) => void
) => {
  return Object.entries(state).map((i, ind) => (
    <Styled.AdminInput
      key={`feedbackFormInputNumb${ind}`}
      name={i[0]}
      placeholder={firstLetterToUpperCase(i[0])}
      value={i[1]}
      onChange={change}
    />
  ));
};

const AdminFeedbackForm = ({ submit, isNewFeedback }: IFeedbackFormProps) => {
  const { submitFunc } = usePushFeedback();
  const { values, handleChange } = useFormikContext<IFeedback>();
  const starsChange = (newValue: number) => (values.stars = newValue);
  const submitForm = (e: React.SyntheticEvent) => submitFunc(e, submit);

  const renderState = {
    companyName: values.companyName,
    text: values.text,
    link: values.link,
  };

  return (
    <Form>
      <div>
        <Styled.AdminSubTitle>Add new review</Styled.AdminSubTitle>
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
          {render(renderState, handleChange)}

          <Styled.AdminBigButton type="submit" onClick={submitForm}>
            {isNewFeedback ? "Add Review" : "Save changes"}
          </Styled.AdminBigButton>
        </div>
      </div>
    </Form>
  );
};

export default AdminFeedbackForm;
