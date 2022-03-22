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
function showUser(id) {
    try {
        if(typeof(id) == 'number') {
            if(id > 0){
            const new_object = new Object({id: id});
            console.log(new_object);
            } else {
                throw new Error(`ID is negative: ${id}`); 
            }     
        }
        else if(typeof(id) =='object') {
            const new_arr = [];
            
            for(let i = 0; i != id.length; i++) {
                if(id[i] > 0){
                    new_arr.push({id: id[i]});
                } else if(id[i] < 0){
                    console.log(`Error: ID must not be negative: ${id[i]}`)
                }
            }
            console.log(new_arr);
        } 
    } catch (error) {
        console.log(error);
    };

}


// showUser(1)


function showUsers(ids) {
    showUser(ids); 

};
showUsers([7, -12, 44, 22])