// let p = new Promise((res, rej) => {
//   let x = 0;
//   if (x == 0) res("sucessful");
//   if (x != 0) rej("Something went wrong.");
// });

// p.then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.log("Error: " + err);
// });

// setTimeout(() => console.log("1, 2, 3, 4, 5..."), 5000);

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log(`a: ${a}, b: ${b}`);
}

const swap = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
  console.log(`a: ${a}, b: ${b}`);
};

let arr = ["Hello", "World"];
let [greeting, name] = arr;
