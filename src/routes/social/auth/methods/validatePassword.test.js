import { validatePassword } from "./validatePassword";

test("password should meet criteria: 8chr, 1special, 1Upper, 1lower", () => {
  expect(validatePassword("Brandmch1!")).toBe(true);
  expect(validatePassword("abcd")).toBe(false);
});
