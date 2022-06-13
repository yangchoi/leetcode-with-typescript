// 제곱근일 경우 true
function isPowerOfTwo(n: number): boolean {
  if(n === 1) {
    return true;
  }
  let result = 1;
  while(true) {
    // 2를 true일 동안 계속 곱한다.
    result *= 2;
    // result가 n이 같아지면 true를 반환
    if(result === n) {
      return true;
      // result가 n을 초과하면 false를 반환
      // 더 이상 2를 곱하지 않고 종료
    }else if(result > n) {
      return false;
    }
  }
  // 이거 재귀 아닌데,,,
};