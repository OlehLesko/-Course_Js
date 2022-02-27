// Task 1
// let x = 1;
// let y = 2;

// let res1 = String(x) + y// Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = Boolean(1) + String(2) // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = Boolean(x || y); // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = parseFloat(x, y)// Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// Task 2
// a 
// const num = +prompt("Enter number");

// if(num % 2 === 0 & num > 0 & num !== 0){
//     console.log(`The entered number is divisible by two`);
// } else {
//     console.log(`The entered number isn't divisible by two`);
// }

// b 
// const num = +prompt("Enter number");

// if (num % 7 === 0) {
//     console.log('True');
// } else {
//     console.log('False');
// }

// Task 3 
// const arr = [];
// arr[1] = 10;
// arr[2] = "Hello";
// arr[3] = false;
// arr[4] = null;

// console.log(arr)

// alert(arr.length)

// const push_in_arr = prompt("Enter element");
// arr[5] = push_in_arr;

// alert(arr[5]);
// delete arr[1];

// alert(arr)
// console.log(arr)

// Task 4 
// let cities = ["Rome", "Lviv", "Warsaw"];  
// cities = cities.join('*');

// console.log(cities);

// Task 5 
// const isAdult = +prompt("Are you 18 years old ?");

// if(isAdult < 18){
//     console.log("You`re adult 18");
// } else if(isAdult > 18){
//     console.log("You`re too young")
// } else {
//     console.log("You`re 18")
// }


// Task 6 
// const side_1 = parseInt(prompt("Enter side 1 : "));
// const side_2 = parseInt(prompt("Enter side 2 : "));
// const side_3 = parseInt(prompt("Enter side 3 : "));

// const p = (side_1 + side_2 + side_3) / 2;

// let areaValue = Math.sqrt(p * (
//     (p - side_1) * (p - side_2) * (p - side_3)
// ));

// areaValue = areaValue.toFixed(3);

// if(side_1 < (side_2 + side_3) && side_2 < (side_1 + side_3) && side_3 < (side_2 + side_1)){
//     console.log(`Area value is ${areaValue}`);
// } else {
//     console.log("Incorrect data");
// };


// function find_right_triangle() {
//     const max_value = Math.max(side_1, side_2, side_3);

//     const side_1_in_rectangle = Math.pow(side_1, 2);
//     const side_2_in_rectangle = Math.pow(side_2, 2);
//     const side_3_in_rectangle = Math.pow(side_3, 2);

//     if (max_value === side_1 || max_value === side_2 || max_value === side_3){
//         if(
//             side_1_in_rectangle === side_2_in_rectangle + side_3_in_rectangle ||
//             side_2_in_rectangle === side_1_in_rectangle + side_3_in_rectangle ||
//             side_3_in_rectangle === side_2_in_rectangle + side_1_in_rectangle
//         ){
//             console.log("It`s right triangle");
//         } else{
//             console.log("It`s not right triangle");
//         }
//     }
    
// };
// find_right_triangle();

// Task 7 
// const currentDate = new Date('August 19, 1975 :01:00');
// const currentHours = currentDate.getHours();
// const currentMinutes = currentDate.getMinutes();
// console.log(currentDate)
// console.log(currentHours)
// console.log(currentMinutes)
// if (currentHours < 5 || currentHours > 22) {
//     console.log("Good night !");
// } else if (currentHours < ) {
//     console.log("Good morning !");
// }