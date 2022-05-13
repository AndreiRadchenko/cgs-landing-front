/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useFormikContext } from "formik";

import CareersTicket from "../../CareersTicket";
import AdminCarousel from "../Global/AdminImageCarousel";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
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
  TicketContainer,
  TicketsButton,
  TicketBox,
  IconBox,
  DeleteBtn,
} from "../../../styles/AdminCareersPage";

interface ICareers {
  isNewTicket: boolean;
  setIsNewTicket: React.Dispatch<React.SetStateAction<boolean>>;
  ticket: number;
  setTicket: React.Dispatch<React.SetStateAction<number>>;
}

const Careers = ({
  isNewTicket,
  setIsNewTicket,
  ticket,
  setTicket,
}: ICareers) => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IDataCareersResponse>();

  const deleteTicket = () => {
    if (isNewTicket) {
      values.tickets.splice(ticket, 1);
      setTicket(0);
      handleSubmit();
    }
  };
  console.log(values);

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
            name={isNewTicket ? `tickets[${ticket}].vacancy` : "vacancy"}
            placeholder="vacancy"
            value={
              isNewTicket ? values.tickets[ticket].vacancy : values.vacancy
            }
            onChange={handleChange}
          />

          <TicketsContainer>
            {values &&
              values.images.map((el, idx) => (
                <TicketsLabel key={idx}>
                  <img
                    src={el.image.url}
                    alt="rocket"
                    width={124}
                    height={212}
                  />
                  <TicketsInput
                    type="radio"
                    name="url"
                    value={el.image.url}
                    onChange={handleChange}
                  />
                </TicketsLabel>
              ))}
          </TicketsContainer>
          <TicketsButton
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            {isNewTicket ? "Edit ticket" : "Add ticket"}
          </TicketsButton>
        </CareersContainer>

        <TicketBox>
          <TicketContainer>
            <IconBox onClick={() => setIsNewTicket(!isNewTicket)}>
              <Image src={isNewTicket ? close : edit} alt="icon" />
            </IconBox>

            <CareersTicket
              route={false}
              vacancy={values.tickets[ticket]?.vacancy}
              imgUrl={
                isNewTicket && values.url
                  ? values.url
                  : values.tickets[ticket]?.image?.url
              }
            />

            <DeleteBtn onClick={deleteTicket}>delete ticket</DeleteBtn>
          </TicketContainer>

          <AdminCarousel
            page={ticket}
            setPage={setTicket}
            length={values.tickets.length}
          />
        </TicketBox>
      </MainContainer>
    </Styled.AdminPaddedBlock>
  );
};

export default Careers;
