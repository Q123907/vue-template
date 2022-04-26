export default {
  /** 时间格式化-带时区 */
  formatDateTime(date, num = 3, interval = "-") {
    const arr = date.split("T");
    const d = arr[0];
    const darr = d.split("-");
    const t = arr[1];
    const hasZone = t.includes("+"); //判断是否有时区
    const tarr = hasZone ? t.split("+") : [];
    const marr = hasZone ? tarr[0].split(":") : t.split(":");
    const tzone = hasZone && Number(tarr[1].substr(0, 2));
    const dd =
      parseInt(darr[0]) +
      "/" +
      parseInt(darr[1]) +
      "/" +
      parseInt(darr[2]) +
      " " +
      parseInt(marr[0]) +
      ":" +
      parseInt(marr[1]) +
      ":" +
      parseInt(marr[2]);
    let time = new Date(Date.parse(dd));
    hasZone && time.setTime(time.setHours(time.getHours() + (8 - tzone)));
    let Y = time.getFullYear() + interval;
    const addZero = (num) => (num < 10 ? "0" + num : num);
    let M = addZero(time.getMonth() + 1) + interval;
    let D = addZero(time.getDate());
    let h = " " + addZero(time.getHours());
    let m = ":" + addZero(time.getMinutes());
    let s = ":" + addZero(time.getSeconds());
    let result = Y + M + D;
    switch (num) {
      case 4:
        result = Y + M + D + h;
        break;
      case 5:
        result = Y + M + D + h + m;
        break;
      case 6:
        result = Y + M + D + h + m + s;
        break;
    }
    return result;
  },
};
