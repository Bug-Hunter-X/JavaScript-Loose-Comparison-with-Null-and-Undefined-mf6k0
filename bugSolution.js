function foo(x) {
  if (x === null) return 0;
  if (x === undefined) return -1; // Or handle undefined as needed
  return x + 1;
}
console.log(foo(null)); // output: 0
console.log(foo(undefined)); // output: -1
console.log(foo(5)); // output: 6