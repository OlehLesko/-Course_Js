// Task 1 
// Перший спосіб 
// const div_first = document.getElementById('test');
// div_first.textContent = 'Last'

// Другий спосіб 
// const div_first = document.querySelector('#test')
// div_first.textContent = 'Last'


// Task 2
// const img_change = document.getElementById('image');
// img_change.src = 'img/cat.jpg'
// alert(img_change)


// Task 3
// const all_div_elements = document.getElementById("text").querySelectorAll("p");

// for(let i = 0; i != all_div_elements.length; i++) {
//     console.log(`Selector text ${i}: ${all_div_elements[i].innerText}`);
// }


// Task 4 
// let arr = [];
// let indexes = [0, 4, 1, 3, 2];

// // Перший спосіб
// // let lis = document.getElementById("list").querySelectorAll("li");
// // lis.forEach(element => arr.push(element.innerText))

// // for(let i = 0; i != indexes.length; i++) {
// //     alert(arr[indexes[i]]);
// // }

// // Другий спосіб
// // let lis2 = document.getElementById("list").getElementsByTagName('li');

// // for(let i = 0; i != indexes.length; i++) {
// //     arr.push(lis2[i].innerText);
// // };

// // for(let i = 0; i != indexes.length; i++) {
// //     alert(arr[indexes[i]]);
// // };


// Task 5
// const i_am_big_header = document.querySelector("h1").classList.add
// ("I_am_big_header");

// const p_elements_from_div = document.getElementById("myDiv").getElementsByTagName('p');
// p_elements_from_div[0].classList.add("First_paragraph")
// p_elements_from_div[1].classList.add("Second_paragraph");
// p_elements_from_div[2].classList.add("Third_paragraph");
// p_elements_from_div[3].classList.add("Fourth_paragraph");

// const li_elements_from_ul = document.getElementById("myList").getElementsByTagName('li');
// const new_li_elem = li_elements_from_ul[0].innerText + li_elements_from_ul[1].innerText + li_elements_from_ul[2].innerText;
// li_elements_from_ul[0].innerText = new_li_elem;
// li_elements_from_ul[1].remove();
// li_elements_from_ul[1].remove();

// const span_elem = document.querySelector("span");
// span_elem.remove();


// Task 6
// const input_1 = document.querySelector("#input1");
// const input_2 = document.querySelector("#input2");

// const prompt_1 = parseInt(prompt("Enter first number : "));
// const prompt_2 = parseInt(prompt("Enter second number : "));


// input_1.value = prompt_1;
// input_2.value = prompt_2;

// input_1.value = input_2.value;
// input_2.value = prompt_1;


// Task 7
// let main = document.createElement("main");
// main.className = "mainClass check item";

// const div = document.createElement("div");
// div.setAttribute("id", "myDiv");
// main.prepend(div);

// const p = document.createElement("p");
// p.innerHTML = "First paragraph";
// div.prepend(p);


// console.log(main);