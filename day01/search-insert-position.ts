function searchInsert(nums: number[], target: number): number {
	let pivot;
	let left = 0;
	// index 값이 필요하기 때문에 -1;
	let right = nums.length - 1;
	pivot = Math.floor((left + right)/2);
	while(left <= right) {
		if(nums[pivot] === target) {
			return pivot;
			
			// taget이 pivot 보다 작으면 pivot 값을 내려가며 target을 찾는다.
		} else if(nums[pivot] > target) {
			left = Math.floor(pivot/2);
			// target이 pivot 보다 크면 pivot 값을 올려가며 target을 찾는다.
		} else {
			right = Math.floor(pivot / 2)
		} 
		// right가 left보다 크거나 같을 동안 while 문을 실행하기 때문에
		// right와 left가 같아지면 같아지는 그 index가 target의 자리가 된다.
	}
	return right;
};
// Time Limit Exceeded

function leetCodeSearchInsert(nums: number[], target: number): number {
	let pivot;
	let left = 0;
	let right = nums.length - 1;
	
	// complete a binary search
	while (left <= right) {
			// set pivot point half way between left and right
			pivot = Math.floor((left + right) / 2);

			// found target
			if (nums[pivot] === target) {
					return pivot;
			}
			// eliminate search space on the right
			else if (nums[pivot] > target) {
					right = pivot - 1
			}
			// eliminate search space on the left
			else {
					left = pivot + 1;
			}
	}
	return left;
}