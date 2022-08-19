// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//
// i.e.
//
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.










function friend(friends){


  function logicx(value){
    return value.length==4; //in this comparison we are using a double equals otherwise it wont work
  }

   let filtered = friends.filter(logicx);
  // we can do this as well

  //  return friends.filter(strlength =>strlength.length==4 );
  //
  return filtered;

}
