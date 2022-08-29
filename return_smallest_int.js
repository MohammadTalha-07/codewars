// Find the smallest integer in the array
// JavaScript:
class SmallestIntegerFinder {
  findSmallestInt(args) {
args.sort(function(a, b) {
  return a - b;
});
    return args[0];

  }

}
