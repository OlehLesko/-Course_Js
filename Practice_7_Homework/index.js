// Task 1 
// let myWindow = window.open(
//         "", 
//         "",
//         "width=300, height=300")

// console.log(myWindow);

// setTimeout(function() {
//   myWindow.resizeTo(500, 500);
//   console.log("Window size was change");
// }, 2000);

// setTimeout(function() {
//   myWindow.resizeBy(200, 200)
// }, 4000);

// setTimeout(function() {
//   myWindow.close()
// }, 8000);

// Task 2
// const btnChangeStyle = document.querySelector("#btn_change_style");

// function changeCss() {
//     const changeStyleText = document.querySelector("#text");   
//     changeStyleText.className = "text"
// }

// btnChangeStyle.onclick = changeCss;


// Task 3 
// const btnBlue = document.getElementById('btn_blue');
// const btnPink = document.getElementById('btn_pink');
// const btnBrown = document.getElementById('btn_brown');
// const linkChangeColor = document.getElementById('link_change_color');


// function changeFonColorOnBlue() {
//     document.body.style.backgroundColor = "blue";
// };

// function changeFonColorOnPink() {
//     document.body.style.backgroundColor = "pink";
// };

// function changeFonColorOnBrown() {
//     document.body.style.backgroundColor = "brown";
// };

// function returnWhite() {
//     document.body.style.backgroundColor = "white";
// };

// function linkChangeFonColor() {
//     document.body.style.backgroundColor = "yellow";
// };


// btnBlue.onclick = changeFonColorOnBlue;
// btnPink.ondblclick = changeFonColorOnPink;

// btnBrown.onmousedown = changeFonColorOnBrown;
// btnBrown.onmouseleave = returnWhite;

// linkChangeColor.onmousemove = linkChangeFonColor;
// linkChangeColor.onmouseleave = returnWhite;


// Task 4
// const select = document.getElementById('user_names');

// function delete_user() {
//     select.remove(select.selectedIndex);  
// };


// Task 5
// const liveButton = document.getElementById("Live_btn");
// const divForELement = document.getElementById("div_for_elements");
// let paragraph = document.getElementById("p");


// function i_was_pressed() {
//     paragraph.innerText += "I was pressed\n";
// };

// function mouse_on_me() {
//     paragraph.innerText += "Mouse on me !\n";
// };

// function mouse_is_not_on_me() {
//     paragraph.innerText += "Mouse is not on me!\n"
// }


// liveButton.onclick = i_was_pressed;
// liveButton.onmousemove = mouse_on_me;
// liveButton.onmouseleave = mouse_is_not_on_me;


// Task 6
// const find_screen_width = document.getElementById("width")
// const screen_width = find_screen_width.innerHTML = "Screen Width: " + screen.width; 

// const find_screen_height = document.getElementById("height")
// const screen_height = find_screen_height.innerHTML = "Screen Height: " + screen.height;


// window.addEventListener('resize', function(e){
//         let newWidth = window.innerWidth;
//         let newHeight = window.innerHeight; 

//         find_screen_width.innerHTML = "Screen Width: " + newWidth;
//         find_screen_height.innerHTML = "Screen height: " + newHeight;
// });


// Task 7
// const arr_cities = {
//     "ger": ["Berlin", "Hamburg", "Munich", "Cologne", "Stuttgart", "Dortmund"],
//     "usa": ["Worcester", "Washington", "Yonkers", "New-York", "Youngstown"],
//     "ukr": ["Kyiv", "Kharkiv", "Odessa", "Dnipro", "Lviv"],
// };


// const parag = document.querySelector('p');

// const prime_select = document.getElementById('country');
// const city_select = document.getElementById('cities');


// function makeList() {
//     city_select.innerHTML = '';
//     let choosed_country = prime_select.value;
//     for(let i = 0; i < arr_cities[choosed_country].length; i++){
//         let create_option = document.createElement('option');
//         create_option.innerHTML = arr_cities[choosed_country][i];
//         city_select.appendChild(create_option);
//     } 
// };

// function pargraph() {
//     parag.innerHTML = '';
//     parag.innerHTML = prime_select.options[prime_select.selectedIndex].text + ', '
//     +city_select.options[city_select.selectedIndex].text;
// };