/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { useFormikContext } from "formik";

import CareersTicket from "../../CareersTicket";
import AdminCarousel from "../Global/AdminImageCarousel";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import {
  IDataCareersResponse,
  IVacancies,
} from "../../../types/Admin/Response.types";

import * as Styled from "../../../styles/AdminPage";
import {
  MainContainer,
  CareersContainer,
  SubTitle,
  TitleInput,
  VacancyInput,
  TicketContainer,
  TicketsButton,
  TicketBox,
  IconBox,
  DeleteBtn,
} from "../../../styles/AdminCareersPage";
import { useMutation } from "react-query";
import { adminCareersService } from "../../../services/adminCareersPage";
import { queryKeys } from "../../../consts/queryKeys";
import AdminStars from "../FeedbackBlock/AdminStars";
import Stack from "../../CareersStack/Stack";
import CareerInfo from "../../CareersStack/CareerInfo";
import { newVacancy } from "../../../consts";

interface ICareers {
  isNewTicket: boolean;
  setIsNewTicket: React.Dispatch<React.SetStateAction<boolean>>;
  ticket: number;
  setTicket: React.Dispatch<React.SetStateAction<number>>;
  refetch: () => any;
}

const Careers = ({
  isNewTicket,
  setIsNewTicket,
  ticket,
  setTicket,
  refetch,
}: ICareers) => {
  const { values, handleChange } = useFormikContext<IDataCareersResponse>();
  const starsChange = (newValue: number) =>
    values.vacancy && (values.vacancy.stars = newValue);
  const starsEditChange = (newValue: number) =>
    values.vacancy && (values.tickets[ticket].stars = newValue);
  const [info, setInfo] = useState<number>(0);

  const { mutateAsync } = useMutation(
    queryKeys.deleteTicketAndVacancy,
    (id: string) => adminCareersService.deleteTicketAndVacancy(id)
  );

  const deleteTicket = async () => {
    const id = values.tickets[ticket]?.id;
    id && (await mutateAsync(id));

    values.tickets.splice(ticket, 1);
    setTicket(0);
  };

  const { mutateAsync: putData } = useMutation(
    queryKeys.UpdateCareersPage,
    (data: IVacancies) => adminCareersService.addTicketCareersPage(data)
  );

  const addOrEditTicket = async () => {
    document.body.style.cursor = "wait";
    if (!isNewTicket && values.vacancy) {
      const id = `${Math.random() * 1000000}`;
      const ticket = { ...values.vacancy, id };
      await putData({
        tickets: [...values.tickets, ticket],
        vacancy: newVacancy,
      });
      values.tickets = [...values.tickets, ticket];
      values.vacancy = newVacancy;
    }
    if (isNewTicket) {
      setIsNewTicket(!isNewTicket);
      await putData({
        tickets: [...values.tickets],
        vacancy: newVacancy,
      });
    }
    await refetch();
    document.body.style.cursor = "auto";
  };

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
            name={
              isNewTicket ? `tickets[${ticket}].vacancy` : "vacancy.vacancy"
            }
            placeholder="vacancy"
            value={
              isNewTicket
                ? values.tickets[ticket].vacancy
                : values.vacancy?.vacancy
            }
            onChange={handleChange}
          />
          <VacancyInput
            type="text"
            name={
              isNewTicket ? `tickets[${ticket}].position` : "vacancy.position"
            }
            placeholder="position"
            value={
              isNewTicket
                ? values.tickets[ticket].position
                : values.vacancy?.position
            }
            onChange={handleChange}
          />
          <AdminStars
            size={30}
            value={Number(
              isNewTicket ? values.tickets[ticket].stars : values.vacancy?.stars
            )}
            handleChange={isNewTicket ? starsEditChange : starsChange}
            edit={true}
          />
          <SubTitle>Stack</SubTitle>
          <Stack isNewTicket={isNewTicket} ticket={ticket} />
          <SubTitle className={"info"}>Info about vacancy</SubTitle>
          {!isNewTicket
            ? values.vacancy.info.map((el, i) => (
                <CareerInfo
                  info={info}
                  setInfo={setInfo}
                  key={i}
                  isNewTicket={isNewTicket}
                  ticket={ticket}
                  infoIndex={i}
                />
              ))
            : values.tickets[ticket].info.map((el, i) => (
                <CareerInfo
                  info={info}
                  setInfo={setInfo}
                  key={i}
                  isNewTicket={isNewTicket}
                  ticket={ticket}
                  infoIndex={i}
                />
              ))}
          <TicketsButton type="button" onClick={addOrEditTicket}>
            {isNewTicket ? "Edit ticket" : "Add ticket"}
          </TicketsButton>
        </CareersContainer>

        {values.tickets.length ? (
          <TicketBox>
            <TicketContainer>
              <IconBox onClick={() => setIsNewTicket(!isNewTicket)}>
                <Image src={isNewTicket ? close : edit} alt="icon" />
              </IconBox>
              <CareersTicket
                className="admin"
                ticket={values.tickets[ticket]}
              />
              <DeleteBtn onClick={deleteTicket} type={"button"}>
                delete ticket
              </DeleteBtn>
            </TicketContainer>

            <AdminCarousel
              page={ticket}
              setPage={setTicket}
              length={values.tickets.length}
            />
          </TicketBox>
        ) : (
          <Styled.AdminPhotoGrid>
            <Styled.AdminCenteredDiv>
              <Styled.AdminSubTitle>No tickets</Styled.AdminSubTitle>
            </Styled.AdminCenteredDiv>
          </Styled.AdminPhotoGrid>
        )}
      </MainContainer>
    </Styled.AdminPaddedBlock>
  );
};

export default Careers;
