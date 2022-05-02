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
//     let arr_result = [];
//     for (let i = 0; i != args.length; i++) {
//         if(typeof(args[i]) === 'number') {
//             arr_result.push(args[i])
//         }
//     }

//     if(arr_result.length > 0) {
//         const res = arr_result.reduce((acc, rec) => acc * rec);
//         return res
//     } else {
//         return 0
//     }
// };

// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 


// Task 4
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
//        return (callback => {
//           this.result = callback();
//        });
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
