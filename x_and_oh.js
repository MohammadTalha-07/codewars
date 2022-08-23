// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
// The string can contain any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    //code here
  var countx = 0
  var county= 0 ;
  str.toLowerCase().split("").forEach(x=>{
    if(x==="x"){
      countx++;
    }
    else if (x==="o"){
      county++;
    }


  });
  console.log(countx, county)

  if(countx===0 && county===0 || countx===county){
    return true
  }
  else{
    return false
  }
}
