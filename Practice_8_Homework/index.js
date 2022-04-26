// Task 1
// function upperCase(word){
//     const worCheck = /^[A-Z]/
//     const result = worCheck.test(word)
//     if(result === true) {
//         console.log("String's starts with uppercase character");
//     } else {
//         console.log("String's not starts with uppercase character");
//     };
// };

// upperCase('regexp');
// upperCase('RegExp');


// Task 2
// const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

// function checkEmail(text) {
//     console.log(regex.test(text))
// };

// checkEmail("Qmail2@gmail.com");
// // Test emails
// checkEmail("workingexample@email.com");
// checkEmail("notworking@2.com");


//Task 3
// function regExp(text){
//     const result_arr = [];

//     const reg_exp = /d(b+)(d)/ig;
//     const result = reg_exp.exec(text);

//     result_arr.push(result[0], result[1], result[2])
//     console.log(result_arr);
// }

// regExp("cdbBdbsbz");


// Task 4
// const reg_exp = /(\w+)\s(\w+)/;
// const str = "Java Script";
// const result = str.replace(reg_exp, "$2, $1");
// console.log(result);


// Task 5
// function valid_card_number(cardNumber) {
//     const reg_exp = /\d{4}-\d{4}-\d{4}-\d{4}/;
//     const result = reg_exp.test(cardNumber);
    
//     result ? console.log("Card number correct") 
//             : console.log("Card number not correct");
// };

// valid_card_number("9999-9999-9999-9999");


// Task 6
// function checkEmail(emailAdress) {
//   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//   if (emailAdress.match(regexEmail)) {
//       console.log("Email is correct!");
//   } else {
//       console.log("Email is not correct!");
//   }
// }

// checkEmail('my_mail@gmail.com');

// checkEmail('#my_mail@gmail.com');

// checkEmail('my_ma--il@gmail.com');


// Task 7
// function validateUserName(username){
//     const usernameRegex = /^[^\d][^!@#\$%\^&\*\(\)_\+-=]\w+\.?\w+/;;
//     const regex = /[+-]?\d+(\.\d+)?/g;
//     const result = usernameRegex.test(username);
//     const matches = username.match(regex);  

//     console.log(result);
//     console.log(matches);
// }
// validateUserName('ee1.1ret3')
// validateUserName('ee1*1ret3');