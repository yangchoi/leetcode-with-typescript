function searchInsert(nums: number[], target: number): number {
  let pivot: number;
  let left = 0; // 0부터 올라감
  let right = nums.length - 1; // 가장 마지막 index 부터 내려감
  
  // 왼쪽에 있는 숫자들이 오른쪽보다 작은 동안
  while (left <= right) {
      // pivot값은 정중앙으로 세팅해서 
      // 해당 pivot(idx) 번째에 있는 요소가 target보다 큰지 작은지 비교
      // target과 비교해서 크면 가장 뒤에서부터 차례차례 내려오며 찾음
      // target과 비교해서 작으면 가장 앞에서부터 차례차례 올라오며 찾음
      pivot = Math.floor((left + right) / 2);

      // 이번 pivot과 같은 idx의 값과 target을 비교
      if (nums[pivot] === target) {
        // 찾으면 pivot(idx) 리턴
          return pivot;
      }
      // pivot 번째 값이 target보다 크면 
      else if (nums[pivot] > target) {
        // pivot이 작아짐
          right = pivot - 1
      }
      // pivot 번째 값이 target보다 작으면 
      else {
        // pivot 값이 커짐
          left = pivot + 1;
      }
  }
  return left;
}