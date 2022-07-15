import {
  IDataCareersResponse,
  ITicket,
  IFormBlock,
} from "../../../types/Admin/Response.types";

export const createNewData = (
  values: IDataCareersResponse,
  currentTicket: number,
  isNewTicket: boolean,
  addVacancy: (id: string) => void
) => {
  let vacancy, ticket: ITicket;
  const tickets = values.tickets;

  if (values.vacancy) {
    vacancy = values.vacancy;
  }

  if (vacancy && !isNewTicket) {
    const id = `${Math.random() * 1000000}`;
    ticket = { ...vacancy, id };
    tickets.push(ticket);
    addVacancy(id);
  }

  // if (values.vacancy && !isNewTicket) {
  //   const id = `${Math.random() * 1000000}`;
  //   const ticket = { ...values.vacancy, id };
  //   values.tickets.push(ticket);
  //   addVacancy(id);
  // }

  return {
    ...values,
    tickets,
    vacancy: {
      vacancy: "",
      position: "",
      stars: 0,
      stack: [],
      fromUs: [],
      fromYou: [],
    },
  };
};
