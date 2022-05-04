import React from "react";
import Image from "next/image";
import { useFormikContext } from "formik";

import rocket1 from "../../../../public/tickets_images/Rectangle-75.png";
import rocket2 from "../../../../public/tickets_images/Rectangle-76.png";
import rocket3 from "../../../../public/tickets_images/Rectangle-77.png";
import rocket4 from "../../../../public/tickets_images/Rectangle-78.png";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";

import * as Styled from "../../../styles/AdminPage";
import {
  MainContainer,
  CareersContainer,
  SubTitle,
  TitleInput,
  VacancyInput,
  TicketsContainer,
  TicketsLabel,
  TicketsInput,
  TicketsButton,
} from "../../../styles/AdminCareersPage";

const Careers = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IDataCareersResponse>();

  return (
    <Styled.AdminPaddedBlock theme="light">
      <Styled.AdminHeader>Careers</Styled.AdminHeader>

      <MainContainer>
        <CareersContainer>
          <SubTitle>Subtitle</SubTitle>
          <TitleInput
            type="text"
            name="subtitle"
            value={values.subtitle}
            onChange={handleChange}
          />

          <SubTitle>Add a new ticket</SubTitle>
          <VacancyInput
            type="text"
            name="vacancy"
            placeholder="Vacancy"
            onChange={handleChange}
          />

          <TicketsContainer>
            <TicketsLabel>
              <Image src={rocket1} alt="rocket" width={124} height={212} />
              <TicketsInput
                type="radio"
                name="url"
                value={values.images[0].image.url}
                id="rocket1"
                onChange={handleChange}
              />
            </TicketsLabel>

            <TicketsLabel>
              <Image src={rocket2} alt="rocket" width={124} height={212} />
              <TicketsInput
                type="radio"
                name="url"
                value={values.images[1].image.url}
                id="rocket2"
                onChange={handleChange}
              />
            </TicketsLabel>

            <TicketsLabel>
              <Image src={rocket3} alt="rocket" width={124} height={212} />
              <TicketsInput
                type="radio"
                name="url"
                value={values.images[2].image.url}
                id="rocket3"
                onChange={handleChange}
              />
            </TicketsLabel>

            <TicketsLabel>
              <Image src={rocket4} alt="rocket" width={124} height={212} />
              <TicketsInput
                type="radio"
                name="url"
                value={values.images[3].image.url}
                id="rocket4"
                onChange={handleChange}
              />
            </TicketsLabel>
          </TicketsContainer>

          <TicketsButton type="submit" onClick={() => handleSubmit}>
            Add ticket
          </TicketsButton>
        </CareersContainer>
      </MainContainer>
    </Styled.AdminPaddedBlock>
  );
};

export default Careers;
