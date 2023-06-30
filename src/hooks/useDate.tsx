import { useContext } from "react";
import { TOTO_CONTEXT } from "../Context/TodoProvider/TodoProvider";

const useDate = () => {
  const { state } = useContext(TOTO_CONTEXT);
  const { startDate, startMonth, startYear } = state;

  const getDate = new Date();
  const defaultDate =
    (getDate.getDate() + 1).toString().length < 2
      ? `0${getDate.getDate()}`
      : getDate.getDate();
  const defaultMonth =
    (getDate.getMonth() + 1).toString().length < 2
      ? `0${getDate.getMonth() + 1}`
      : getDate.getMonth() + 1;
  const defaultYear = getDate.getFullYear().toString();

  let date;
  let month;
  let year;
  if (startDate === "") {
    date = defaultDate;
  } else {
    date = startDate;
  }
  if (startMonth === "") {
    month = defaultMonth;
  } else {
    month = startMonth;
  }
  if (startYear === "") {
    year = defaultYear;
  } else {
    year = startYear;
  }

  const lastFullDate = {
    defaultDate,
    defaultMonth,
    defaultYear,
  };
  const fullStartDate = {
    startDate: date,
    startMonth: month,
    startYear: year,
  };
  return {fullStartDate, lastFullDate};
};

export default useDate;
