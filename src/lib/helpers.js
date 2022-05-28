export const randHexColor = () => {
  return ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
};

export const rand = (max) => {
  return Math.floor(Math.random() * max);
};

export const capitalize = (word, index) => {
  return index === 0
    ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
    : word;
};
