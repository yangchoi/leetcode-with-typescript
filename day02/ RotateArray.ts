/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    if(k !== 0) {
			if(k < nums.length) {
				const slicedArray = nums.slice(nums.length - k, nums.length);
				nums.splice(nums.length - k, k);
				// unshift : 새로운 요소를 배열 맨 앞쪽에 추가하고 새로운 길이 반환
				nums.unshift(...slicedArray);
			}else {
				for(let count = 1; count <= k; count++){
					nums.unshift(nums.pop());
				}
			}
		};
};