import { Form, Formik } from "formik";
import React from "react";
import { feedbackInit } from "../../../consts";
import * as Styled from "../../../styles/AdminPage";
import { IFeedback, IFeedbackBlock } from "../../../types/Admin/Response.types";
import AdminStars from "./AdminStars";

interface IFeedbackFormProps {
  state: IFeedbackBlock;
  submit: () => void;
}

const AdminFeedbackForm = ({ state, submit }: IFeedbackFormProps) => {
  const submitFunction = (values: IFeedback) => {
    state.feedBacks.push(values);
  };

  return (
    <Formik onSubmit={submitFunction} initialValues={feedbackInit}>
      {(props) => {
        return (
          <Form>
            <div>
              <Styled.AdminStarsGrid>
                <Styled.AdminInput
                  name="name"
                  placeholder="Name"
                  value={props.values.name}
                  onChange={props.handleChange}
                />
                <Styled.AdminStarsFlex>
                  <AdminStars
                    value={props.values.stars}
                    handleChange={(newValue: number) =>
                      (props.values.stars = newValue)
                    }
                    size={38}
                    edit={true}
                  />
                </Styled.AdminStarsFlex>
              </Styled.AdminStarsGrid>
              <div>
                <Styled.AdminInput
                  name="companyName"
                  placeholder="Company"
                  value={props.values.companyName}
                  onChange={props.handleChange}
                />
                <Styled.AdminInput
                  name="role"
                  placeholder="Position"
                  value={props.values.role}
                  onChange={props.handleChange}
                />
                <Styled.AdminInput
                  name="text"
                  placeholder="Text"
                  value={props.values.text}
                  onChange={props.handleChange}
                />

                <Styled.AdminBigButton
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    props
                      .submitForm()
                      .then(() => submit())
                      .then(() => props.resetForm());
                  }}
                >
                  Add Review
                </Styled.AdminBigButton>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AdminFeedbackForm;
