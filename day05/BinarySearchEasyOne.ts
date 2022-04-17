function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while(left < right) {
    const middle = left + Math.floor((right - left + 1) / 2);
    if(target < nums[middle]) {
      right = middle - 1;

    }else {
      left = middle;
    }
  }
  return nums[left] === target ? left : -1;
}