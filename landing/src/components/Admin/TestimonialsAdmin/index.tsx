import React, { useState } from "react";
import { Formik, useFormikContext } from "formik";

import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import TestimonialForm from "./TestimonialForm";
import AdminCarousel from "../Global/AdminImageCarousel";
import AdminTestimonial from "./AdminTestimonial";

import * as Styled from "../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";

import { IDataResponse } from "../../../types/Admin/Response.types";
import { testimonialsInit } from "../../../consts";
import useTestimonialLogic from "../../../hooks/useTestimonialsLogic";
import ButtonArrow from "../../../utils/ButtonArrow";
import { AdminTestimonialsValidation } from "../../../validations/AdminTestimonialsValidation";

const TestimonialsAdmin = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IDataResponse>();

  const [isNewTestimonial, setIsNewTestimonial] = useState(true);
  const [isEditing, setIsEditing] = useState(true);

  const {
    testimonial,
    setTestimonial,
    editFunction,
    deleteFunction,
    submitFunction,
  } = useTestimonialLogic();

  return (
    <Styled.AdminHalfGrid>
      <div style={{ marginBottom: "50px" }}>
        <SubHeaderWithInput
          placeholder="Testimonials title"
          header="Subtitle"
          inputValue={values.TestimonialsBlock.title}
          name={"TestimonialsBlock.title"}
          onChangeFunction={handleChange}
        />
        <Formik
          key={`testimonialsBlock${isNewTestimonial}`}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={isNewTestimonial ? submitFunction : editFunction}
          validationSchema={AdminTestimonialsValidation}
          initialValues={
            isNewTestimonial
              ? {
                  ...testimonialsInit,
                  slideBanner: {
                    image: null,
                  },
                }
              : values.TestimonialsBlock.testimonials[testimonial]
          }
        >
          <>
            <TestimonialForm
              setIsNewFeedback={setIsNewTestimonial}
              setIsEditing={setIsEditing}
              submit={handleSubmit}
              isNewTestimonial={isNewTestimonial}
            />
            <BlackButton
              type="submit"
              onClick={() => handleSubmit()}
              size={"1.5em"}
              padding={"1.11em 3em"}
            >
              Save changes
              <ArrowContainer>
                <ButtonArrow />
              </ArrowContainer>
            </BlackButton>
          </>
        </Formik>
      </div>
      <div>
        {values.TestimonialsBlock.testimonials.length === 0 ? (
          <h1>No Testimonials</h1>
        ) : (
          <AdminTestimonial
            setIsNewFeedback={setIsNewTestimonial}
            testimonial={values.TestimonialsBlock.testimonials[testimonial]}
            deleteFunc={() => deleteFunction(testimonial)}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        )}
        <AdminCarousel
          page={testimonial}
          setPage={setTestimonial}
          length={values.TestimonialsBlock.testimonials.length}
        />
      </div>
    </Styled.AdminHalfGrid>
  );
};

export default TestimonialsAdmin;
