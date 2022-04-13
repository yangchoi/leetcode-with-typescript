/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    
  if(nums.includes(0)) {
    const zeroes = nums.filter((v) => v === 0);
    if(zeroes.length === nums.length) {
      return;
    }
    for(let i = nums.length - 1; i >= 0; i--){
        if(!nums[i]){
          nums.splice(i, 1);
          nums.push(0);
        }
    };
    
    
  };

};