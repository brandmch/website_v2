export function parseDate(dateStr) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const x = new Date(Date.parse(dateStr));

  let hour = x.getHours();
  let min = x.getMinutes();
  let month = x.getMonth();
  let day = x.getDate();
  let year = x.getFullYear();

  const time = () => {
    if (min < 10) {
      min = `0${min}`;
    }
    return hour === 0
      ? `12:${min}am`
      : hour === 12
      ? `12:${min}pm`
      : hour < 12
      ? `${hour}:${min}am`
      : `${hour - 12}:${min}pm`;
  };

  return `${time()} - ${months[month]} ${day}, ${year}`;
}
