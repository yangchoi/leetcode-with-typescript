 const binarySearch = (letters: string[], target: string): number => {
  let first = 0;
  let length = letters.length - 1;

  while(first < length) {
    const middle = Math.floor((first + length) / 2);

    if(letters[middle] === target && letters[middle+1] !== target || letters[middle] < target && letters[middle +1] > target) {
      return middle + 1;
    }
    if(letters[middle] <= target) {
      first = middle + 1;

    }else {
      length = middle;
    }
  }
  return -1;
};

function nextGreatestLetter(letters: string[], target: string): string {
  const index = binarySearch(letters, target);
  return index !== -1 ? letters[index] : letters[0];
}