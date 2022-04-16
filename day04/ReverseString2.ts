function reverseStr(s: string, k: number): string {
  const strArr = s.split('');
 for(let idx = 0; idx = s.length; idx+= 2 * k) {
  let front = idx;
  let back = Math.min(front + k -1, strArr.length - 1); 
  while(front < back) {
    let temp = strArr[front];
    strArr[front++] = strArr[back];
    strArr[back--] = temp;
  }
 }
  
  return strArr.join('');
};

// time limit