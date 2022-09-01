// 
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F









function abbrevName(name){
let str = "";
    let array = name.split("");

 let index = array.indexOf(" ");

  return (array[0]+"."+array[index+1]).toUpperCase();

//   if(str.indexOf(".")===-1){
//     str+="."
//   }

//   else{
//     return
//   }
  console.log (str)


}
