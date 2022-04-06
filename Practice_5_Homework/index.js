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
const arrSalaries = [];
const arrNames = [];

class Worker {
    #privateField = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    };

    set setExp(value){
        this.#privateField = value;
    };

    get showExp() {
        return this.#privateField;
    }

    showSalary = () => {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary : ${salary}` );
    };

    showSalaryWithExperience() {
        const salary = this.dayRate * this.workingDays * this.#privateField;
        console.log(`${this.fullName} salary : ${salary}`);

        if(this.#privateField == 1.5) {
            arrSalaries.push(salary);
            arrNames.push(this.fullName)
            arrSalaries.sort(function(a,b){ 
                return a - b
            });
        };

    };   

    sort() {
        console.log("Sorted salary:");
        for(let i = 0; i != arrSalaries.length; i++) {
            console.log(`${arrNames[i]}: ${arrSalaries[i]}`)
        };
    }

   
};

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New expirience: " + worker1.showExp)
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();


let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New expirience: " + worker2.showExp)
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New expirience: " + worker3.showExp)
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

worker3.sort() // Sort



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
//     constructor(base, height, getArea) {
//         super(getArea)
//         this.base = base;
//         this.height = height;
//     }

//     getArea() {
//         super.getArea();

//         const area = (this.base * this.height) / 2;
//         console.log(area);
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
//         console.log("Area of square is: " + areaOfSquare);
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
//         console.log(findArea)

//     }
// };
// // const f = new Circle(5);
// // f.getArea();

// function handleFigures(figures) {
//     // const openValues = figures;
//     // console.log(openValues)

//     for(let i = 0; i != figures.length; i++) {
//         if (figures[i].prototype == 'GeometricFigure'){
//             console.log(true);
//         }
//         // console.log(GeometricFigure.hasOwnProperty(figures[i]));
//         console.log(Triangle.prototype)
        
//     };
//     // console.log(figures)
//     // console.log(figures.hasOwnProperty('GeometricFigure'));
//     // console.log(Element.prototype.figures)

// };
// // 
// //hasOwnProperty
// //reduse


// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// // console.log(handleFigures(figures));
// handleFigures(figures)


// // let obj = {name: 'ol'}
// // obj.age = 24
// // console.log(obj)