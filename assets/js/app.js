// console.log("Hello world")
// const n = prompt("Enter your name")
// alert ("Hi " + n + " Welcome to javascript")

// const p1 = 5000;
// const r1 = 4;
// const t1 = 3;
// const i = p1 * r1 * t1 / 100;
// console.log("Calculated simple interest with the given parameters = " + i);




// alert("Now it's time for you to calculate with any values ");
// const p = prompt("Enter the principal: ");
// const r = prompt("Enter the interest rate: ");
// const t = prompt("Enter the number of years: ");
// let si = p * r * t / 100;
// alert("Calculated simple interest with the given parameters = " + si);

//To calculate compound interest

let p, t, r, n, i, x, y;
p = 5000;
t = 3;
r = 4;
n = 2;
r = r / 100;
i = Math.pow(p * (1 - r / n), (n*t));

console.log("Interest rate after 3 years = ", i);
console.log("Interest rate plus principal after 3 years = ", i + p);