export function sparsePost(text) {
  return text
    .split("")
    .map((c) => {
      if (c === "\n") {
        return "{{{{{n}}}}}";
      } else if (c === '"') {
        return "{{{{{doublequotes}}}}}";
      } else {
        return c;
      }
    })
    .join("");
}
