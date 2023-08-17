const fullDate = new Date();
const year = fullDate.getFullYear();
const month =
  fullDate.getMonth().toString().length < 2
    ? `0${fullDate.getMonth() + 1}`
    : `${fullDate.getMonth() + 1}`;
const date =
  fullDate.getDate().toString().length < 2
    ? `0${fullDate.getDate()}`
    : `${fullDate.getDate()}`;

const useDateValidation = (info: any) => {
  let error = "";

  const startDate = info.startDate;
  const startMonth = info.startMonth;
  const startYear = info.startYear;

  const endDate = info.endDate;
  const endMonth = info.endMonth;
  const endYear = info.endYear;

  if (startDate.length) {
    // --- Date
    if (startDate.length === 0) {
      error = "";
    } else if (startDate.length <= 1) {
      error = "At least two digits must be input";
    } else if (startDate.length > 2) {
      error = "Can not input more than 2 digits";
    } else if (date > startDate) {
      error = "Can not input below today's date";
    } else if (startDate > "31") {
      error = "Can not input more than 31";
    }
  }

  if (startMonth.length) {
    //---- Month
    if (startMonth.length === 0) {
      error = "";
    } else if (startMonth.length <= 1) {
      error = "At least two digits must be input";
    } else if (startMonth.length > 2) {
      error = "Can not input more than 2 digits";
    } else if (month > startMonth) {
      error = "Can not input below today's date";
    } else if (startMonth > "12") {
      error = "Can not input more than 12";
    }
  }

  if (startYear.length) {
    // --- Year
    if (startYear.length === 0) {
      error = "";
    } else if (startYear.length <= 1) {
      error = "At least two digits must be input";
    } else if (startYear.length > 4) {
      error = "Less then 4 Disit";
    } else if (year > startYear) {
      error = "Can not input below today's date";
    }
  }

  if (endDate.length) {
    // --- Date
    if (endDate.length === 0) {
      error = "";
    } else if (endDate.length <= 1) {
      error = "At least two digits must be input";
    } else if (endDate.length > 2) {
      error = "Can not input more than 2 digits";
    } else if (endDate < startDate) {
      error = "Dates below the start date cannot be input";
    } else if (date > endDate) {
      error = "Can not input below today's date";
    } else if (endDate > "31") {
      error = "Can not input more than 31";
    }
  }

  if (endMonth.length) {
    //---- Month
    if (endMonth.length === 0) {
      error = "";
    } else if (endMonth.length <= 1) {
      error = "At least two digits must be input";
    } else if (endMonth.length > 2) {
      error = "Can not input more than 2 digits";
    } else if (endMonth < startDate) {
      error = "Month below the start month cannot be input";
    } else if (month > endMonth) {
      error = "Can not input below today's date";
    } else if (endMonth > "12") {
      error = "Can not input lessthen today 12";
    }
  }

  if (endYear.length) {
    // --- Year
    if (endYear.length === 0) {
      error = "";
    } else if (endYear.length <= 1) {
      error = "At least two digits must be input";
    } else if (endYear.length > 4) {
      error = "Less then 4 Disit";
    } else if (year > endYear) {
      error = "Can not input below today's date";
    } else if (endYear < startDate) {
      error = "Year below the start year cannot be input";
    }
  }

  return error;
};

export default useDateValidation;
