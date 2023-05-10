export default function monthNameParser(x) {
  return x === 0
    ? "January"
    : x === 1
    ? "February"
    : x === 2
    ? "March"
    : x === 3
    ? "April"
    : x === 4
    ? "May"
    : x === 5
    ? "June"
    : x === 6
    ? "July"
    : x === 7
    ? "August"
    : x === 8
    ? "September"
    : x === 9
    ? "October"
    : x === 10
    ? "November"
    : x === 11
    ? "December"
    : "";
}
