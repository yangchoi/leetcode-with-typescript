function searchRange(nums: number[], target: number): number[] {
  if(!nums.length || !nums.includes(target)) {
    return [-1, -1];
  }
  // start, end 에 대한 map을 만든다
  const record: Record<number, [number, number]> = {};
  let start = 0;
  let end = 0;

  for(let i = 0; i < nums.length; i++) {
    if(!record[nums[i]]) {
      start = i;
    }else {
      end++;
    }
    if(nums[i] !== nums[i+1]) {
      end = i;
    }
    record[nums[i]] = [start, end];
  }
  return record[target];
};