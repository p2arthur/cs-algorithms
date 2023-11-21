//----------------------------------------------------------------------------
// 5n (loop) + 2 operations (assignments) -> O(n)
export const addUpTo1 = (n: number): number => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};
//----------------------------------------------------------------------------

//----------------------------------------------------------------------------
// 3 operations: *, +, / -> O(1)
export const addUpTo2 = (n: number): number => {
  const result = (n * (n + 1)) / 2;
  return result;
};
//----------------------------------------------------------------------------
//Nested loop: n² operations -> O(n²)
export const printAllPairs = (n: number): void => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
