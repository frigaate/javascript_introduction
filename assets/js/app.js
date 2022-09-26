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

// let p, t, r, n, a;
// p = 5000;
// t = 3;
// r = 4;
// n = 1;
// r = r / 100;
// a = p * Math.pow(1 - (r / n)), (n * t);

// console.log("Interest rate after 3 years = ", a);
// console.log("Interest rate plus principal after 3 years = ", a + p);

const a = parseFloat( prompt("Enter value for a") );
const b = parseFloat( prompt("Enter value for b") );
const c = parseFloat( prompt("Enter value for c") );
const d = Math.pow(b, 2) - (4 * a * c)
let x1, x2;

if( d > 1){
x1 = (-b + Math.sqrt(d)) / (2 * a);
x2 = (-b - Math.sqrt(d)) / (2 * a);
}

else{
    console.log("Equation leads to complex roots which gives");
    const x11 = (-b / (2 * a));
    const x12 = ( Math.sqrt(Math.abs(d))) / (2 * a);
    // const x21 = (-b / (2 * a));
    // const x22 = ( Math.sqrt(Math.abs(d))) / (2 * a);

    x1 = x11 + " + i" + x12;
    x2 = x11 + " - i" + x12;
}

console.log("Solution to the quadratic equation: X1 = ", x1, ",            X2 = ", x2);