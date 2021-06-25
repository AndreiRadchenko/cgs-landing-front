import "react-datepicker/dist/react-datepicker.css";

import ruLocale from "date-fns/locale/ru";
import ReactDatePicker, { registerLocale, ReactDatePickerProps } from "react-datepicker";

import * as Styled from "./DatePicker.styles";

registerLocale("ru-RU", ruLocale);

export const DatePicker = (props: ReactDatePickerProps) => (
  <Styled.Wrapper>
    <ReactDatePicker {...props}/>
  </Styled.Wrapper>
);
