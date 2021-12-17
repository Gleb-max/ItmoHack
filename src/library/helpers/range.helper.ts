const range = (from: number, to: number, step: number): number[] => {
  const result = [];

  for (let i = from; i <= to; i += step) {
    result.push(i);
  }

  return result;
};

export default range;
