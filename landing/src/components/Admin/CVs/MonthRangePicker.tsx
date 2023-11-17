import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useFormikContext } from "formik";

import "react-datepicker/dist/react-datepicker.css";
import { CvData } from "../../../types/Admin/AdminCv.types";
import { formatPeriod } from "../../../utils/CVProject/formatPeriod";

type IRange = [Date | null, Date | null];

interface IProps {
  idx: number;
}

export const MonthRangePicker = ({ idx }: IProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { values, setFieldValue } = useFormikContext<CvData>();
  const { startDate: formikStart, endDate: formikEnd } =
    values.projects.project[idx];

  useEffect(() => {
    setStartDate(
      formikStart ? new Date(formikStart) : new Date("2023-01-02T03:24:00")
    );
    setEndDate(
      formikEnd ? new Date(formikEnd) : new Date("2023-02-02T03:24:00")
    );
  }, [formikStart, formikEnd, setFieldValue]);

  const handlePickerChange = ([newStartDate, newEndDate]: IRange) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    if (newEndDate !== null) {
      setFieldValue(`projects.project[${idx}].startDate`, newStartDate);
      setFieldValue(`projects.project[${idx}].endDate`, newEndDate);
      setFieldValue(
        `projects.project[${idx}].date`,
        formatPeriod(newStartDate, newEndDate)
      );
    }
  };

  if (startDate === null) {
    return null;
  } else {
    return (
      <DatePicker
        showIcon
        selected={startDate}
        onChange={handlePickerChange}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
    );
  }
};
