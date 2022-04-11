function sortedSquares(nums: number[]): number[] {
	const squaredNums = nums.map((num) => {
		return num ** 2;
	});

	squaredNums.sort((num1, num2) => num1 - num2);
  return squaredNums;
};