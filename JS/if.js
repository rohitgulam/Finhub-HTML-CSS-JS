// IF - Statements 


// if (condition) {
//  Action to do 
// } else {
// Action to do if condition not met / false
// }

// var num = 7

// // if (num > 10){
// //     console.log('Num is greater than 10');
// // } else {
// //     console.log("Number is not greater than 10");
// // }

// Check if a number is even or odd 
// var num = 144

// if (num % 2 == 0) {
//     console.log('Number is even');
// } else {
//     console.log('Number is odd');
// }

// if () {

// } else if () {

// } else if (){

// } else {

// }

// FizzBuzz
// Check if multiple of 3 - Print Fizz
// Check if multiple of 5 - Print Buzz
// Check if multiple of 3 and 5 - Print FizzBuzz
// Neither, print the number itself 

// 1st way

// var num = 15

// if (num % 3 === 0 && num % 5 != 0){
//     console.log('Fizz');
// } else if (num % 5 === 0 && num % 3 != 0){
//     console.log('Buzz');
// } else if (num % 3 === 0 && num % 5 === 0){
//     console.log('FizzBuzz');
// } else {
    // console.log(num);
// }

// var num = 11

// if (num % 3 === 0 && num % 5 === 0){
//     console.log('FizzBuzz');
// } else if (num % 5 === 0){
//     console.log('Buzz');
// } else if (num % 3 === 0){
//     console.log('Fizz');
// } else {
//     console.log(num);
// }


// // Now use a loop to print 1 to 100 but follow FizzBuzz
for (num = 1; num <= 100; num ++){
    if (num % 3 === 0 && num % 5 === 0){
        console.log('FizzBuzz');
    } else if (num % 5 === 0){
        console.log('Buzz');
    } else if (num % 3 === 0){
        console.log('Fizz');
    } else {
        console.log(num);
    }
}

