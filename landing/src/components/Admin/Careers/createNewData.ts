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
  const form: IFormBlock = JSON.parse(JSON.stringify(values.form));
  let url, vacancy, ticket: ITicket;
  const tickets = values.tickets;

  if (values.url && isNewTicket) {
    url = values.url;
    tickets[currentTicket].image.url = url;
  }

  if (values.url && values.vacancy) {
    url = values.url;
    vacancy = values.vacancy;
  }

  if (url && vacancy && !isNewTicket) {
    const id = `${Math.random() * 1000000}`;
    ticket = { image: { url }, vacancy, id };
    tickets.push(ticket);
    addVacancy(id);
  }

  values.vacancy = "";

  const { subtitle, subtitle2, images, meta } = values;

  return {
    subtitle,
    subtitle2,
    images,
    meta,
    form,
    tickets,
  };
};
