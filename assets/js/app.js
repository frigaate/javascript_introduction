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

// const a = parseFloat( prompt("Enter value for a") );
// const b = parseFloat( prompt("Enter value for b") );
// const c = parseFloat( prompt("Enter value for c") );
// const d = Math.pow(b, 2) - (4 * a * c)
// let x1, x2;

// if( d > 1){
// x1 = (-b + Math.sqrt(d)) / (2 * a);
// x2 = (-b - Math.sqrt(d)) / (2 * a);
// }

// else{
//     console.log("Equation leads to complex roots which gives");
//     const x11 = (-b / (2 * a));
//     const x12 = ( Math.sqrt(Math.abs(d))) / (2 * a);
//     // const x21 = (-b / (2 * a));
//     // const x22 = ( Math.sqrt(Math.abs(d))) / (2 * a);

//     x1 = x11 + " + i" + x12;
//     x2 = x11 + " - i" + x12;
// }

// console.log("Solution to the quadratic equation: X1 = ", x1, ",            X2 = ", x2);

// Code to calculate body mass index
const mass = parseFloat( prompt("Enter body mass in KG") );
const height = parseFloat( prompt("Enter height in meters") );
const bmi = mass / Math.pow(height, 2);
console.log("Your Body Mass Index is: ", bmi);
let x;
if(bmi >= 25.0){
    x = 1;
}
else if(bmi < 18.5){
    x = 2;
}

switch(x){
    case 1:
    console.log("Your BMI shows you are overwright");
    break;
    case 2:
    console.log("Your BMI shows you are underweight");
    break;
    default:
        console.log("Your BMI is within the healthy range");

}


const arr = [4, 9, 10, 20]
const arr1 = [3, 0, 1, 2]

// arr.push(25, 23, 90, "hello", true, 2.264, ["Nice", true, 3.142])
// arr.unshift()
// arr.pop()
// arr.shift()

console.log(arr)

const person = {
    name: "Akpos", age: 46, isMarried: false
}

// To access any property of an array we use
// dot notation 
person.name
// or reassign it with 
person.name = "Olusegun"
// We can add property and value to an object by using
person.yearOfBirth = 1976
//An object value can also be retrieved or assigned with bracket notation as
person["obj"]
//To access a value, the property inside the  square beacket, must be a string
//To add property and value can also be done with the square bracket by
person["is cute"] = false
//When a peoperty is creater with space between, it must always be referenced with square bracket method and quotation mark, because of the space, as using the dot method will not recognise the space

console.log(person)

// const scores = [22, 54, 76, 92, 43, 33];
// console.log(scores.length);

// let i = 0;
// while(i < scores.length){
//     console.log(scores[i]+2);
//     i++;
// }

// do{
//     consolee.log(scores[i]);
//     i++;
// }
// while(i < scores.length);

const score = [1, 2, 3, 4, 5, 6];

for(i = 0; i < score.length; i++)
{
    console.log(score[i] + 2);
}