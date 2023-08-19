const is31DaysMonth = (monthNumber) => [1, 3, 5, 7, 8, 10, 12].includes(monthNumber);
const is30DaysMonth = (monthNumber) => [4, 6, 9, 11].includes(monthNumber);

const isValidMonth = (monthNumber) => is31DaysMonth(monthNumber) || is30DaysMonth(monthNumber) || monthNumber === 2;

const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

const getMonthDays = (monthNumber, year) => {
  if (!isValidMonth(monthNumber)) {
    throw new TypeError('Invalid Month Number.');
  }

  if (is31DaysMonth(monthNumber)) {
    return 31;
  }

  if (is30DaysMonth(monthNumber)) {
    return 30;
  }

  if (monthNumber === 2 && isLeapYear(year)) {
    return 29;
  }

  return 28;
};

export { getMonthDays };

