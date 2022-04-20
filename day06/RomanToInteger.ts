function romanToInt(s: string): number {
  let result = 0;
  const value = {
    'I': 1, 
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  for(let i = 0; i < s.length; i++) {
    let curr = value[s[i]];
    let prev = value[s[i+1]];

    if(curr < prev) {
      result += prev - curr;
      i++;
    } else {
      result += curr;
    }

  }
  return result;
};