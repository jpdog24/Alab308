// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

//Lopp through all numbers from 1 to 100
for (let x = 1; x <=100; x++){

//If a number is divisible by 3, log "Fizz."
 if(x % 3 == 0 && x % 5 ==0){
    console.log("Fizz Buzz");
// If a number is divisible by 5, log “Buzz.”
} else if (x % 3 == 0) {
    console.log("Fizz");

// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
} else if (x % 5 == 0) {
    console.log("Buzz");

} else {
    console.log(x);
}

}

// for (let x = 5; x <= 25; x++) {
//   console.log(x);

//   for (let i = 2; i <= 40; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//     if (i % 5 == 0) {
//       break;
//     }
//   }
//   console.log("Broke out of this loop");
// }
