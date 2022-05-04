import {
  IDataCareersResponse,
  ITicket,
  IForm,
} from "../../../types/Admin/Response.types";

export const createNewData = (values: IDataCareersResponse) => {
  const form: IForm = JSON.parse(JSON.stringify(values.form));
  const tickets = values.tickets;

  let url, vacancy, ticket: ITicket;
  if (values.url && values.vacancy) {
    url = values.url;
    vacancy = values.vacancy;
  }

  if (url && vacancy) {
    ticket = { image: { url }, vacancy };
    tickets.push(ticket);
  }

  return {
    subtitle: values.subtitle,
    subtitle2: values.subtitle2,
    images: values.images,
    form,
    tickets,
  };
};
