import { parseDate } from "./parseDate";

test("YEAR-MONTH-DAY TIME+00:00 should return TIME - DATE", () => {
  expect(parseDate("2023-04-28T00:28:30.667117+00:00")).toBe(
    "8:28pm - Apr 27, 2023"
  );
  expect(parseDate("2023-08-28T00:28:30.667117+00:00")).toBe(
    "8:28pm - Aug 27, 2023"
  );
  expect(parseDate("2007-12-28T00:28:30.667117+00:00")).toBe(
    "7:28pm - Dec 27, 2007"
  );
});
