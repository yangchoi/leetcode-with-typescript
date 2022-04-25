function peakIndexInMountainArray(arr: number[]): number {
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] !== 0) {
      if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
        return i;
      }
    }
  }
};