const monthLookup = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

// * function to formate date as 'day (number) month (string), Year (number)'
// * example: 24 May, 2021
const dateFormatter = {
  toDayMonthYear: (date) => {
    date = date.split("T")[0];
    // array [year, month, date]
    const ymd = date.split("-");
    const formattedDate = ymd[2] + " " + monthLookup[ymd[1]] + ", " + ymd[0];
    return formattedDate;
  },
};

export default dateFormatter;
