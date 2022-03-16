// Task 1
// function calcRectangleArea( width, height ) {
//     try {
//         const sum = width * height;
//         if(Number.isInteger(sum)) {
//             alert(sum)
//         } else {
//             throw new Error("Entered numbers isn't correct")
//         }
//     } catch (e) {
//         alert(e)
//     }       
// }

// calcRectangleArea(4, 40)

// Task 2
// function checkAge() {
//         const user_age = +prompt("Enter your age ");

//         if(user_age == 0){
//             throw new Error( "The field is empty! Please enter your age")
//         } else if(isNaN(user_age)){
//             throw new Error( "Entered value isn't number")
//         } else if (user_age < 14) {
//             throw new Error( "You are too young")
//         } else {
//             alert("Congratulations. You get films") 
//             window.location.href = "https://www.netflix.com/ua/"; //
//         }
// } 
// try{
//     const result = checkAge();
// }
// catch (exception) {
//     alert(exception.stack)
// }


// Task 3
// class MonthException {
//     constructor(message) {
//         this.name = 'MonthException';
//         this.message = message;
//     }
  
//     showMonthName(month) {
//         try {
//             const months = ["January","February","March","April","May","June","July",
//             "August","September","October","November","December"];

//             const find_months = months.find(
//                     (el, idx) => typeof el === "string" && idx === month-1);

//             if(find_months == undefined){
//                 throw new Error(this.message);
//             } else { 
//                 console.log(find_months);
//             }

//         } catch (error) {
//             console.log(this.name + ' ' + this.message);
//         }
        
//     }

// }

// const class23 = new MonthException('Incorrect month number');
// class23.showMonthName(); // Напишіть номер місяця


// Task 4
// const new_object = {};

//console.log(new_object)

// function showUser(id) {
//     try {
//         if(id > 0){
//            const new_object = new Object({id: id});
//            console.log(new_object);
//         //    return new_object
//         } else {
//             throw new Error(`ID is negative: ${id}`); 
//         }      
//     } catch (error) {
//         console.log(error);
//     };

// }


// showUser(1)
// // console.log(new_object)



// // function showUsers(ids) {
// //     console.log(ids.length)
// //     for(let i = 0; i != ids.length; i++){
// //         showUser(ids[i]);
// //     } 

// // };
// // showUsers([7, -12, 44, 22])