// Task 1
// const arr = ["Tom", "Sam", "Ray", "Bob"];
// const [x, y, , ...z] = arr;

// console.log(x); 
// console.log(y); 
// console.log(z); 


// Task 2 
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };

// const [ , name2, , name4] = data.names;
// const [ , age2, , age4] = data.ages;

// console.log(name2); 
// console.log(age2); 
// console.log(name4); 
// console.log(age4); 
 

// Task 3 
// function mul(...args) {
//     let sum = 0;
//     for (let i = 0; i != arguments.length; i++) {
//         if(typeof(arguments[i]) === 'number') {
//             sum += arguments[i];
//         }
//     }
//     return sum
// };

// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 


// Task 4 Don`t correct work now
// let server = {
//     data: 0,
//     convertToString: function (callback) {
//         callback(() => this.data + "")
//     }
//  };
//  let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//        this.server.data = data;
//        this.server.convertToString(this.notification());
//     },    
//     notification: function () {
//        return (function (callback) {
//           this.result = callback();
//        }).bind(this);
//     }
//  };
//  client.calc(123);
//  console.log(client.result); // "123"
//  console.log(typeof client.result); // "string"


// Task 5
// function mapBuilder(keys, values) {
//     let new_map = new Map();

//     for(let i = 0; i != keys.length; i++) {
//         new_map.set(keys[i], values[i])
//     };

//     return new_map;
// }

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"
