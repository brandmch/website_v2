const randomKeyGenerator = (length) => {
  let s = "";

  for (let i = 0; i < length; i++) {
    s = `${s}${String.fromCharCode(Math.random() * 94 + 33)}`;
  }

  return s;
};

export default randomKeyGenerator;
