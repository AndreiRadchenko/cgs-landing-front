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
  const vacancy: ITicket | undefined = values.vacancy;
  const tickets = values.tickets;

  if (vacancy && !isNewTicket) {
    const id = `${Math.random() * 1000000}`;
    if (values.vacancy) {
      tickets.push(values.vacancy);
    }
    addVacancy(id);
  }

  if (values.vacancy) {
    values.vacancy.vacancy = "";
    values.vacancy.position = "";
    values.vacancy.stack = [];
    values.vacancy.stars = 0;
  }

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
