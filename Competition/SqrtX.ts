// binary search는 중앙값을 기준으로 검색 범위를 줄여가는 것
// 찾고자 하는 숫자에 맞는 범위를 설정하고 중앙값을 구한다.


// 제곱근 : 제곱의 반대
// A의 제곱근 : 제곱해서 A가 되는 수 (양의 제곱근, 음의 제곱근)
// 25의 제곱근은 -5, 5
// 루트를 씌운 모양새와 같다

// 반으로 쪼갠 숫자를 찾아야함
// 이는 x의 제곱근이 완벽한 제곱과 가깝다는 것을 의미
// 그렇기 때문에 x와 가까운 제곱을 양쪽으로 두어 x를 유추할 수 있다.
// a**2 <= x < (a +1 )^2
// x 양옆의 숫자는 완벽한 제곱이기 때문에 완벽한 제곱근을 찾을 수 있다.


function mySqrt(x: number): number {
  let left = 0; // 0부터 찾는다.
  let right = x; // 주어진 숫자 값에서 내려간다.
  
  // 양쪽의 값이 서로 만나는 시점까지 실행한다.
  while(left <= right) {
    // left와 right 의 중간값을 찾는다.
    // * Math.floor : 소수점 이하의 값들을 버리는 내림.

    const mid = left + Math.floor((right - left)/2);
    // x는 양의 integer 이므로 mid**2가 integer 범위를 벗어날 수 있음
    // (left+right) / 2 가 아닌 이유는 number 범위를 벗어날 수 있기 때문
    const value = mid ** 2;

    // 중앙값의 제곱이 주어진 숫자 x 보다 작다면
    // left는 0이 아닌 중앙값에서 올라가게 된다.
    if(value < x) {
      left = mid + 1;
      // 반대로 중앙값의 제곱이 주어진 숫자 x보다 크다면
      // right는 중앙값에서부터 내려가게 된다.
    }else if(value > x) {
      right = mid - 1;
    }else {
      // 해당사항이 없다면 그냥 중앙값을 반환
      return mid;
    }
  }
  return right;
};
