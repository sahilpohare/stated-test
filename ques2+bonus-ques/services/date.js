const { dayLookup } = require("../utils");

class DateService {
  /**
   * @param {Date} date
   */
  static getFirstAndLastDayOfMonth(date) {
    let y = date.getFullYear();
    let m = date.getMonth();
    let firstDay = new Date(y, m, 2);
    let lastDay = new Date(y, m + 1, 1);
    return {
      firstDay: {
        date: firstDay.toISOString().split("T")[0],
        day: dayLookup[firstDay.getDay()],
      },
      lastDay: {
        date: lastDay.toISOString().split("T")[0],
        day: dayLookup[lastDay.getDay()],
      },
    };
  }

  /**
   *
   * @param {Date} date
   */
  static getDays(date) {
    let timeConst = 24 * 60 * 60 * 1000;

    let sunday = new Date(date.valueOf() - date.getDay() * timeConst);

    //Get All the days of the week
    let days = [];
    for (let i = 0; i < 7; i++) {
      let dt = new Date(sunday.valueOf() + i * timeConst);
      days.push({
        date: dt,
        day: dayLookup[dt.getDay()],
      });
    }

    console.log(days);
    return days;
  }
}

module.exports = DateService;
