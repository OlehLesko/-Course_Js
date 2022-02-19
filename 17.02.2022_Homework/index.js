// Task 2
// console.log("Lesko");


// Task 3
// Розкоментарте Task 3 в HTML без цього код не запрацює

// let a = 10;
// let b = "Hi";
// alert(a);
// alert(b);

// a = b;
// document.getElementById("Task_3").innerHTML = a;
// document.getElementById("Task_3_2").innerHTML = b;


// Task 4
// let first_object = {
//     txt: "String",
//     numbers: 40,
//     yes_or_no: true,
//     IDK: undefined,
//     unknown: null,
// }
// console.log(first_object);


// Task 5 
// let isAdult = confirm("Are you 18 years old ?");

// isAdult ? console.log("User has 18 years old") 
//         : console.log("User hasn`t 18 years old")


// Task 6 
// const myFirstName = "Oleh"; // String
// const myLastName = "Lesko"; // String
// const myTeachGroup = "Lv-678.JS Core"; // String
// const birthYear = 2005; // Number
// let myFamilyStatus = true; // boolean


// console.log(birthYear, myFamilyStatus, myFirstName, myLastName, myTeachGroup);

// let g = null;
// let r = undefined;
// console.log(typeof(g), typeof(r));


// Task 7 
// const userLogin = prompt("Enter your login");
// const userEmail = prompt("What your email");
// const userPassword = prompt("And enter your password");

// let body_tag = document.querySelector('body').innerHTML = '<h1  class="dear_user">Dear user, here is your data</h1>'
// let div = document.createElement('div');
// div.className = 'div_rectangle';
// div.innerHTML = `<h1 id="div_rectangle_txt">Login : ${userLogin} <br>Email : ${userEmail} <br>Password : ${userPassword}</h1>`;
        
// document.body.append(div);


// Task 8
// Розкоментарте Task 8 в HTML без цього код не запрацює

// let hours = document.querySelector("#btn_hour");
// let day = document.querySelector("#btn_day");
// let month = document.querySelector("#btn_month");


// hours.onclick = () => {
//     const number_in_hours = +prompt("Enter number of  hours");
//     let result_hours = 0;

//     if(number_in_hours == 0){
//         alert("Entered number = 0");
//     } else if (number_in_hours < 0){
//         alert("Entered number is smaller 0");
//     } else {
//         result_hours = number_in_hours * 3600;
//     }
//     document.getElementById('count_seconds').innerHTML = 
//         `${number_in_hours} hours = ${result_hours} seconds`
    
// }

// day.onclick = () => {
//     const number_in_day = +prompt("Enter number of days");
//     let result_day = 0;

//     if(number_in_day == 0){
//         alert("Entered number = 0");
//     } else if (number_in_day < 0){
//         alert("Entered number is smaller 0");
//     } else {
//         result_day = number_in_day * 86400;
//     }
//     document.getElementById('count_seconds').innerHTML = 
//         `${number_in_day} days = ${result_day} seconds`

// }

// month.onclick = () => {
//     const number_in_month = +prompt("Enter number of  month");
//     const count_days_in_month = +prompt("Enter count days in month");
//         if (count_days_in_month === 0){
//             alert("Number of days is 0")
//         } else if(count_days_in_month < 0) {
//             alert("Number of days is smaller 0")
//         }
//     let days_result = count_days_in_month * 86400;
//     let result_month = 0;

//     if(number_in_month == 0){
//         alert("Entered number = 0");
//     } else if (number_in_month < 0){
//         alert("Entered number is smaller 0");
//     } else {
//         result_month = number_in_month * days_result;
//     }
//     document.getElementById('count_seconds').innerHTML = 
//         `${number_in_month} months = ${result_month} seconds`
    
// }




