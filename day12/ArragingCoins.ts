function arrangeCoins(n: number): number {
  if(n <= 1) {
      return n;
  }
  let i = 1;
   while(n >= 0) {
       n = n-i;
       i++;
   }
   return i -2;
   
};