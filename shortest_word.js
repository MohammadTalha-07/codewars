

// find shortest word of a string 













function findShort(s){
  let newArray = s.split(" ")
//   newArray.forEach(element=> console.log(element));
   newArray.sort(function(a, b) {
    return a.length - b.length;
  });

  return newArray[0].length;

  //return s.split(" ").sort((a,b)=>a-b;)


}
