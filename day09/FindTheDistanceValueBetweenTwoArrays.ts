function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number { 
  let ans = arr1.length;
for(let i = 0; i < arr1.length; i++) {
    for(let i2 = 0; i2 < arr2.length; i2++) {
        const absValue = Math.abs(arr1[i] - arr2[i2]);
        if(absValue <= d) {
            ans--;
            break;
        }
    }
}
  return ans;
};