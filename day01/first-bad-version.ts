/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
// return first bad version
 var solution = function(isBadVersion: any) {
	return function(n: number): number {
		let left  = 1; 
		let right = n;
			
		while(left < right) {
			const middle = Math.floor((right - left)/2) + left;
			if(isBadVersion(middle)) {
				right = middle;
			}else {
				left = middle + 1;
			}
		}
		return left;
			
	};
};