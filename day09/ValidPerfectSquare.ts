function isPerfectSquare(num: number): boolean {
  // perfect square : 완전제곱
  let left = 0;
  let right = num;

  while(left <= right) {
    const middle = Math.floor((left + right)/2);
    const value = middle ** 2;
    
    if(value < num) {
      left = middle + 1;
    }else if(value > num) {
      right = middle - 1;
    }else {
      return true;
    }
  }
  return false;
};