function mySqrt(x: number): number {
  let left = 0;
  let right = x;
  
  while(left <= right) {
    const mid = left + Math.floor((right - left) /2);
    const value = mid **2;

    if(value < x) {
      left = mid + 1;
    }else if(value > x) {
      right = mid - 1;
    }else {
      return mid;
    }
  }
  return right;
};