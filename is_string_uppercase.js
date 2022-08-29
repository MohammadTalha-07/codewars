// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.




String.prototype.isUpperCase = function() {
return this==this.toUpperCase();
}

// checking with direct equality === with strings always takes the case into consideration

// "javascript" != "Javascript"
