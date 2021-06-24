class DateUtil {
  constructor(customDate, by) {
    this.customDate = customDate;
    this.by = by;
  }

  getDate() {
    let date;
    if (!this.customDate) {
      date = new Date();
    } else {
      date = new Date(this.customDate);
    }
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    let finalTime = [
      (hour < "9" ? "0" : "") + hour,
      (minute < "9" ? "0" : "") + minute,
    ].join(":");
    let finalDate = [
      year,
      (month < "9" ? "0" : "") + month,
      (day < "9" ? "0" : "") + day,
    ].join("-");
    return [finalDate, finalTime].join(this.by);
  }
}

export default DateUtil;
