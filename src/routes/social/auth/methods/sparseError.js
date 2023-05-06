export function sparseError(str) {
  return /Incorrect username or password/.test(str.toString())
    ? 1
    : /LimitExceededException: Attempt limit exceeded, please try after some time/.test(
        str.toString()
      )
    ? 2
    : /Invalid verification code provided, please try agai/.test(str.toString())
    ? 3
    : str;
}
