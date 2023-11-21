//----------------------------------------------------------------------------
export const addUpTo1 = (n: number): number => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

//----------------------------------------------------------------------------
export const addUpTo2 = (n: number): number => {
  const result = (n * (n + 1)) / 2;
  return result;
};
