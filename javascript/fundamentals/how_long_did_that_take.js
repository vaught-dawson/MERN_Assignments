const { performance } = require("perf_hooks");

Number.prototype.isPrime = function () {
  for (let i = 2; i <= Math.sqrt(this); i++) {
    if (this % i === 0) {
      return false;
    }
  }
  return true;
};

// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while (primeCount < 1e6) {
//   if (num.isPrime()) {
//     primeCount++;
//   }
//   num++;
// }
// console.log(`The 1,000,000th prime number is ${num - 1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// const start1 = performance.now();
// // recursive
// function rFib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return rFib(n - 1) + rFib(n - 2);
// }
// const result1 = rFib(40);

// console.log(`The 20th fibonacci number is ${result1}`);
// console.log(`This took ${performance.now() - start1} milliseconds to run`);

// const start2 = performance.now();
// // iterative
// function iFib(n) {
//   const vals = [0, 1];
//   while (vals.length - 1 < n) {
//     let len = vals.length;
//     vals.push(vals[len - 1] + vals[len - 2]);
//   }
//   return vals[n];
// }
// const result2 = iFib(40);

// console.log(`The 20th fibonacci number is ${result2}`);
// console.log(`This took ${performance.now() - start2} milliseconds to run`);

const start3 = performance.now();
const story =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log("Reversed 1: ", reversed1);
console.log(`This took ${performance.now() - start3} milliseconds to run`);

const start4 = performance.now();
const reversed2 = () => {
  let output = "";
  for (let letter of story) output = `${letter}${output}`;
  return output;
};
let output2 = reversed2();
console.log("Reversed 2: ", output2);
console.log(`This took ${performance.now() - start4} milliseconds to run`);

console.log("Is same? ", output2 == reversed1);
