// Task 1
// const array = [2, 3, 4, 5];

// function multiply_using_for() {
//     let sum = 1;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum * array[i];
//     }
//     console.log(sum)
   
// }

// function multiply_using_while() {
//     let sum = 1;
//     let i = 0;
//     while(i < array.length){
//         sum = sum * array[i];
//         i++;
//     }
//     console.log(sum)
   
// }

// multiply_using_for();
// multiply_using_while();


// Task 2

// for(let i = 0; i <= 15; i++) {
//     if(i % 2 == 0){
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }


// Task 3 
// const arr = [];

// function randArray(k) {
//     for(let i = 0; i < k; i++) {
//         let num = Math.floor(Math.random() * 501);

//         if (Number.isInteger(num)){
//             arr.push(num);
//         }
//     }
//     console.log(arr)
// }

// randArray(2);


// Task 4
// const number_a = +prompt("Enter number a");
// const number_b = +prompt("Enter number b");

// function raiseToDegree(a, b) {
//     if (Number.isInteger(a & b)){
//         let result = Math.pow(a, b);
//         console.log(result)
//     } else {
//         alert("Enter correctly numbers")
//     }
    
// };

// raiseToDegree(number_a, number_b)


// Task 5 
// function findMin(...args) {
//     const mn = Math.min(...args);
//     console.log(mn);
// };

// findMin(12, 14, 4, -4, 0.2); // Ваш масив 
// findMin(12, 14, 4, -4, -10, -100); // Тестовий масив 


// Task 6
// function findUnique(arr) {  
//     const arr2 = [...new Set(arr)];

//     if(arr.length == arr2.length){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// };

// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true


// Task 7 
// function lastElem(arr, num) {
//     if(num != undefined){
//         console.log(arr.slice(-num))
//     } else if (num == undefined){
//         console.log(arr[arr.length - 1])
//     }
// }

// lastElem([3, 4, 10, -5]);      // -5
// lastElem([3, 4, 10, -5],2);   // [10, -5]
// lastElem([3, 4, 10, -5],8);   // [3, 4, 10, -5]


// Task 8
// const str = 'i love java script';

// function titleCase(str) {
//     const splitStr = str.toLowerCase().split(' ');

//     for (let i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + 
//         splitStr[i].substring(1);     
//     } 
//     return splitStr.join(' '); 
//  }
 
// console.log(titleCase(str))