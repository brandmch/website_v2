export function validatePassword(str) {
  return /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[\W\D]*[\W\D]){8,}$/.test(
    str
  );
}
