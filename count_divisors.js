// 
// Count the number of divisors of a positive integer n.
//
// Random tests go up to n = 500000.




function getDivisorsCnt(n){
    // todo
  var count = 0;
  for (i=1;i<=n;i++){
    if(n%i===0){
      count++;
    }                          //if can be written without an else
  }
   return count;
}
