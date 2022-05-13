import {
  IDataCareersResponse,
  ITicket,
  IFormBlock,
} from "../../../types/Admin/Response.types";

export const createNewData = (
  values: IDataCareersResponse,
  currentTicket: number,
  isNewTicket: boolean
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
  }

  values.vacancy = "";

  return {
    subtitle: values.subtitle,
    subtitle2: values.subtitle2,
    images: values.images,
    form,
    tickets,
  };
};
