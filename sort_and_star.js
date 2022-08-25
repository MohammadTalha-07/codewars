

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
// The returned value must be a string, and have "***" between each of its letters.
//
// You should not remove or add elements from/to the array.





function twoSort(s) {
  s.sort();

var lala =  s[0].split("");

  for(i=0;i<lala.length-1;i++){
    lala[i]+= "***"
  }

  return lala.join("");

}

//alternate sol
// s.sort();
//
//  return  s[0].split("").join("***")
