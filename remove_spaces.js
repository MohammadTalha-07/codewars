


// Simple, remove the spaces from the string, then return the resultant string.









function noSpace(x){
//   return (x.split(" ").join(""))

  // x.split makes an array where the next element is decided on the first space " ",
  // then we have and array of elements and also spaces but when we join all the elements are joined without spaces

  //also we can

  let str = "";

  for(i=0;i<x.length;i++){
    if(x[i]!=" "){
      str+=x[i];
    }

  }

return str
}
