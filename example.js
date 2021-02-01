let p = new Promise((res, rej) => {
  let x = 0;
  if (x == 0) res("sucessful");
  if (x != 0) rej("Something went wrong.");
});

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log("Error: " + err);
});

setTimeout(() => console.log("1, 2, 3, 4, 5..."), 5000);
