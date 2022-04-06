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
// const arr = [];

// function showProps(obj) {
//     arr.push(obj)
//     console.log(arr);
// };

// const obj = {
//     course: "JS fundamental",
//     companyName: "SoftServe",
//     studentName: "Oleh",
//     studentAge: 16,
//     learning: true
// };

// showProps(obj)

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
//         console.log(`${this.fullName} salary : ${salary}` );
//     };   
   
// };

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New expirience: " + worker1.showExp)
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();


// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New expirience: " + worker2.showExp)
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New expirience: " + worker3.showExp)
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();


// Task 5
// class GeometricFigure {
//     getArea() {
//         return 0;
//     };

//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// };

// class Triangle extends GeometricFigure {
//     constructor (side_1, side_2, side_3) {
//         this.side_1 = side_1;
//         this.side_2 = side_2;
//         this.side_3 = side_3;
//     };

//     getArea() {
//         const p = (this.side_1 + this.side_2 + this.side_3) / 2;

//         let areaValue = Math.sqrt(p * (
//             (p - this.side_1) * (p - this.side_2) * (p - this.side_3)
//         ));

//         areaValue = areaValue.toFixed(3);
//         console.log(areaValue);

//     }
// };

// class Square extends GeometricFigure {
//     getArea() {

//     }
// };

// class Circle extends GeometricFigure {
//     getArea() {

//     }
// };
// const f = new Triangle(5, 3, 6);
// f.getArea();



// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));
