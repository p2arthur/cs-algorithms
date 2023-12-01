//execution time - O(n)
export const anagramChecker = (word1: string, word2: string): boolean => {
  const word1Counter: { [key: string]: number } = {};

  if (word1.length !== word2.length) {
    console.log('1', false);
    return false;
  }

  for (let letter of word1) {
    //If letter exists in frequency counter (word1Counter) increment else set to 1
    word1Counter[letter] ? word1Counter[letter]++ : (word1Counter[letter] = 1);
  }

  for (let i = 0; i < word2.length; i++) {
    let letter = word2[i];

    //Can't find the letter on frequency counter(word1Counter) return false
    if (!word1Counter[letter]) {
      console.log(word1Counter);
      console.log('2', false);
      return false;
    } else {
      word1Counter[letter] -= 1;
    }
  }
  console.log(word1Counter);
  console.log(true);
  return true;
};
