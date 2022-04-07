// Task 1 
// function propsCount(currentObject) {
//     console.log(Object.keys(currentObject).length);

// };

// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" ,
// };

// propsCount(mentor);


// Task 2
// const arr_keys = [];
// const arr_values = [];

// function showProps(obj) {
//     const obj_keys = Object.keys(obj);
//     const obj_values = Object.values(obj);
//     arr_keys.push(obj_keys);
//     arr_values.push(obj_values);
//     console.log(arr_keys);
//     console.log(arr_values);
// };

// const obj = {
//     course: "JS fundamental",
//     companyName: "SoftServe",
//     studentName: "Oleh",
//     studentAge: 16,
//     learning: true
// };

// showProps(obj);

// Task 3 
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     };

//     showFullName = () => {
//         console.log(this.name + " " + this.surname);
//     };
// };

// // let test1 = new Person("Petro", "Petrenko") // Test class Person
// // test1.showFullName(); // Test class Person

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }; 

//     showFullName = (midleName) => {
//         console.log(this.name + " " + midleName );
//     };

//     showCourse = (numberCourse) => {
//         console.log("Current course: " + numberCourse); 
//     };
// };

// const stud1 = new Student("Petro", "Petrenko", 2015);
// stud1.showFullName("Petrovych");
// stud1.showCourse(6);

// Task 4 
// const arrSalaries = [];
// const arrNames = [];

// class Worker {
//     #privateField = 1.2;

//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     };

//     set setExp(value){
//         this.#privateField = value;
//     };

//     get showExp() {
//         return this.#privateField;
//     }

//     showSalary = () => {
//         const salary = this.dayRate * this.workingDays;
//         console.log(`${this.fullName} salary : ${salary}` );
//     };

//     showSalaryWithExperience() {
//         const salary = this.dayRate * this.workingDays * this.#privateField;
//         console.log(`${this.fullName} salary : ${salary}`);

//         if(this.#privateField == 1.5) {
//             arrSalaries.push(salary);
           
//             arrSalaries.sort(function(a, b){ 
//                 return a - b
//             });
            
//             arrNames.push(this.fullName)

//             const fromIndex = arrNames.indexOf('Tom Tomson'); 
//             const toIndex = 2;

//             const element = arrNames.splice(fromIndex, 1)[0];

//             arrNames.splice(toIndex, 2, element);   
            
//         };

//     };   

//     sort() {
//         console.log("Sorted salary:");
//         for(let i = 0; i != arrSalaries.length; i++) {
//             console.log(`${arrNames[i]}: ${arrSalaries[i]}`)
//         };
//     }

   
// };

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New expirience: " + worker1.showExp)
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// console.log('')

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New expirience: " + worker2.showExp)
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// console.log('')

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New expirience: " + worker3.showExp)
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();


// console.log('')

// worker3.sort() // Sort



// Task 5
// let total_area = 0;

// class GeometricFigure {
//     getArea() {
//         return 0;
//     };

//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// };


// class Triangle extends GeometricFigure {
//     constructor(base, height, getArea) {
//         super(getArea)
//         this.base = base;
//         this.height = height;
//     }

//     getArea() {
//         super.getArea();

//         const area = (this.base * this.height) / 2;
//         console.log(`Geometric figure: Triangle - area: ${area}`)
//         total_area += area;
//     }
// };


// class Square extends GeometricFigure {
//     constructor(squareLength, getArea) {
//         super(getArea)
//         this.squareLength = squareLength;
//     };

//     getArea() {
//         super.getArea()
    
//         const areaOfSquare = this.squareLength * this.squareLength;
//         console.log(`Geometric figure: Square - area: ${areaOfSquare}`);
//         total_area += areaOfSquare;
//     };
// };


// class Circle extends GeometricFigure {
//     constructor(radius, getArea) {
//         super(getArea)
//         this.radius = radius;
//     };

//     getArea() {
//         super.getArea();

//         let pi = 3.14159265358979323846;
//         const findArea = pi * this.radius * this.radius;
//         console.log(`Geometric figure: Circle - area: ${findArea}`)
//         total_area += findArea;

//     }
// };


// function handleFigures(figures) {    

//     for(let i = 0; i != figures.length; i++) {
//         switch (true) {
//             case figures[i] == 'Triangle':
//                 let index_element_triangle = figures.indexOf(figures[i]);
            
//                 const create_figures_triangle = new Triangle(figures[index_element_triangle].base,
//                      figures[index_element_triangle].height)
//                 create_figures_triangle.getArea();
                
//                 break;
//             case figures[i] == 'Square':
//                 let index_element_square = figures.indexOf(figures[i]);
            
//                 const create_figures_square = new Square(figures[index_element_square].squareLength)
//                 create_figures_square.getArea();
                
//                 break;
//             case figures[i] == 'Circle':
//                 let index_element_circle = figures.indexOf(figures[i]);
                        
//                 const create_figures_circle = new Circle(figures[index_element_circle].radius)
//                 create_figures_circle.getArea();
                
//                 break;
//         }  
//     };
//     console.log(`Total area : ${total_area}`);

// };


// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// handleFigures(figures)