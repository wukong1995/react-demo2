export const add = (text) => {
  return { type: 'INCREASE', text };
};

export const changeState = (index) => {
  return { type: 'DISCREASE', index };
};

export const setFilter = (filter) => {
  return { type: 'FILTER', filter };
};
