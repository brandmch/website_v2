export default function capitalize(str) {
  if (Array.isArray(str)) {
    return str.map((c) => capitalize(c));
  } else {
    return str
      .split(" ")
      .reduce((acc, curr) => {
        let tempStr = curr.split("");
        tempStr[0] = tempStr[0].toUpperCase();
        return [...acc, tempStr.join("")];
      }, [])
      .join(" ");
  }
}
