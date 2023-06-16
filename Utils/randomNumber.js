module.exports = getRandomNumber = (min = 0, max = 2) => {
  return Math.floor(Math.random() * max) + min - 1;
};
