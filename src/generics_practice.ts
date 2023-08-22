const getLastEl = <T>(arr: T[]): T | undefined => {
  const lastElement = arr[arr.length - 1];
  return lastElement;
};

const array = [1, 2, "3"];
const lastEl = getLastEl(array);
