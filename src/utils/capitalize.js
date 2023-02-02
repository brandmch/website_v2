export default function capitalize(str) {
  return str
    .split(" ")
    .reduce((acc, curr) => {
      let tempStr = curr.split("");
      tempStr[0] = tempStr[0].toUpperCase();
      return [...acc, tempStr.join("")];
    }, [])
    .join(" ");
}
