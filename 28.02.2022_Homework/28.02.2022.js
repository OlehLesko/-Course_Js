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
// const day = new Date(); // Тестова дата December 17, 1995 23:59:00
// const hr = day.getHours();

// 1 варіант
// if(hr == 23 || hr == 0 || hr == 1 || hr == 2 || hr == 3 || hr == 4){
//     console.log("Good night");
// } else if (hr == 5 || hr == 6 || hr == 7 || hr == 8 || hr == 9 || hr == 10){
//     console.log("Good morning");
// } else if(hr == 11 || hr == 12 || hr == 13 || hr == 14 || hr == 15 || hr == 16){
//     console.log("Good afternoon");
// } else if(hr == 17 || hr == 18 || hr == 19 || hr == 20 || hr == 21 || hr == 22){
//     console.log("Good evening");
// }


// 2 варіант
// switch (hr) {
//     case 23:
//     case 0 :
//     case 1 :
//     case 2 :
//     case 3 :
//     case 4 :
//         console.log("Good night");
//         break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log("Good morning");
//         break;
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:     
//         console.log("Good afternoon");
//         break;
//     case 17:
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:  
//         console.log("Good evening");
//         break;
// };
