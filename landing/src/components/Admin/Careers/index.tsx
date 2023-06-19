import React, { useState } from "react";
import Image from "next/image";
import { useFormikContext } from "formik";

import CareersTicket from "../../CareersTicket";
import edit from "../../../../public/editIcon.svg";
import close from "../../../../public/bigClose.svg";
import {
  IDataCareersResponse,
  IVacancies,
} from "../../../types/Admin/Response.types";
import * as AdminPageStyled from "../../../styles/AdminPage";
import * as Styled from "../../../styles/AdminCareersPage";
import { useMutation } from "@tanstack/react-query";
import { adminCareersService } from "../../../services/adminCareersPage";
import { queryKeys } from "../../../consts/queryKeys";
import CareerInfo from "../../CareersStack/CareerInfo";
import { newVacancy } from "../../../consts";
import { ArrowContainer } from "../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../utils/ButtonArrow";

interface ICareers {
  isNewTicket: boolean;
  setIsNewTicket: React.Dispatch<React.SetStateAction<boolean>>;
  ticket: number;
  setTicket: React.Dispatch<React.SetStateAction<number>>;
  refetch: () => any;
};

const Careers = ({
  isNewTicket,
  setIsNewTicket,
  ticket,
  setTicket,
  refetch,
}: ICareers) => {
  const { values, handleChange } = useFormikContext<IDataCareersResponse>();
  const [info, setInfo] = useState<number>(0);
  const [ticketId, setTicketId] = useState<number | null>();
  const isAdminPanel = true;

  const { mutateAsync } = useMutation(
    [queryKeys.deleteTicketAndVacancy],
    (id: string) => adminCareersService.deleteTicketAndVacancy(id)
  );

  const deleteTicket = async (index: number) => {
    const id = values.tickets[index]?.id;
    if (id) {
      await mutateAsync(id.toString());
    
      const updatedTickets = [...values.tickets];
      updatedTickets.splice(index, 1);
    
      setTicket(0);
      values.tickets = updatedTickets;
    }
  };

  const { mutateAsync: putData } = useMutation(
    [queryKeys.UpdateCareersPage],
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

  const editTicket = (index: number) => {
    setIsNewTicket(!isNewTicket)
    setTicketId(index)
    setTicket(index)
  };

  return (
      <Styled.MainContainer>
        <Styled.CareersContainer>
          <Styled.SubTitle>Speciality</Styled.SubTitle>
          <Styled.VacancyInput
            style={{width: '40%'}}
            type="text"
            name={
              isNewTicket ? `tickets[${ticket}].vacancy` : "vacancy.vacancy"
            }
            placeholder="Speciality"
            value={
              isNewTicket
                ? values.tickets[ticket].vacancy
                : values.vacancy?.vacancy
            }
            onChange={handleChange}
          />
          <Styled.SubTitle>Small description</Styled.SubTitle>
          <Styled.VacancyInput
            style={{width: '70%'}}
            type="text"
            name={
              isNewTicket ? `tickets[${ticket}].description` : "vacancy.description"
            }
            placeholder="Small description"
            value={
              isNewTicket
                ? values.tickets[ticket].description
                : values.vacancy?.description
            }
            onChange={handleChange}
          />
          <Styled.AboutWork>
            <Styled.Location>
              <Styled.SubTitle>Work Location</Styled.SubTitle>
              <Styled.VacancyInput
                type="text"
                name={
                  isNewTicket ? `tickets[${ticket}].location` : "vacancy.location"
                }
                placeholder="Work location"
                value={
                  isNewTicket
                    ? values.tickets[ticket].location
                    : values.vacancy?.location
                }
                onChange={handleChange}
              />
            </Styled.Location>
            <Styled.TypeOfWork>
              <Styled.SubTitle>Type of work</Styled.SubTitle>
              <Styled.VacancyInput
                type="text"
                name={
                  isNewTicket ? `tickets[${ticket}].time` : "vacancy.time"
                }
                placeholder="Time of work"
                value={
                  isNewTicket
                    ? values.tickets[ticket].time
                    : values.vacancy?.time
                }
                onChange={handleChange}
              />
            </Styled.TypeOfWork>
          </Styled.AboutWork>
          <Styled.SubTitle>
            Info about vacancy
          </Styled.SubTitle>
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
          <Styled.TicketsButtonContainer>
            <Styled.TicketsButton type="button" onClick={addOrEditTicket}>
              {isNewTicket ? "Edit ticket" : "Add ticket"}
            </Styled.TicketsButton>
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </Styled.TicketsButtonContainer>
          {values.tickets.length ? (
            <Styled.TicketBox>
              <Styled.SubTitle>Editing</Styled.SubTitle>
              {values.tickets.map((ticket, id) => (
                <Styled.TicketChange key={id}>
                  <Styled.TicketEditAndDeleteButtons>
                  <Styled.IconBox onClick={() => editTicket(id)}>
                    <Image src={isNewTicket && ticketId == id ? close : edit} alt="icon" />
                  </Styled.IconBox>
                  <Styled.DeleteBtn onClick={() => deleteTicket(id)} type={"button"}>
                    delete
                  </Styled.DeleteBtn>
                  </Styled.TicketEditAndDeleteButtons>
                  <CareersTicket className="admin" ticket={ticket} isAdminPanel={isAdminPanel}/>
                </Styled.TicketChange>
              ))}
            </Styled.TicketBox>
          ) : (
            <AdminPageStyled.AdminPhotoGrid>
              <AdminPageStyled.AdminCenteredDiv>
                <AdminPageStyled.AdminSubTitle>
                  No tickets
                </AdminPageStyled.AdminSubTitle>
              </AdminPageStyled.AdminCenteredDiv>
            </AdminPageStyled.AdminPhotoGrid>
          )}
        </Styled.CareersContainer>
      </Styled.MainContainer>
  );
};

export default Careers;