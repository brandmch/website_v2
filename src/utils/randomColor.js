// Returns a random color in rgba()

export const randomColor = () => {
  function randomValue() {
    return Math.floor(Math.random() * 256);
  }
  return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
};
