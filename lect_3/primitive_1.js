"use strict";
//Primitive Data Type
// Primitive Data Types in Typescript
//Boolean // Number //String //Null //undefined
//Boolean: Reprisents a logical Value, True or False
let isStudent = true;
let hasPermission = false;
//Number: represents numeric values, both integers and floating point numbers
let age = 33;
let boatlenght = 33.3333;
//string: Represents Textual data, enclosed in single ''textual date' or "textual data"
let message = "Hello Motto, its play area";
let userName = "PIAIC";
let numberOfStudent = "200";
// Null Value : Represent international absense of object Value
let noValue = null;
// Undefined: represent a variable that has been declared but value ha not been assigned.
let teacherName = undefined;
// TYPEOF OPERATOR
console.log(typeof userName);
let a = [12, 13, 25, 30]; //Array
console.log(a instanceof Array);
console.log(a instanceof String);
// class Person {   //object wich is directed from class
//     name: string;
//     age: number;
//     newLearner: boolean;
// }
// let p = new Person();
// p.name = "jhon";
// p.age = 27;
// p.newLearner = true;
// console.log(p instanceof Person);
// console.log(typeof p);
// console.log(typeof p.name);
// console.log(typeof p.age);
// console.log(typeof p.newLearner);
// Analizing Data Type
let x = 10;
let y = "hello";
let z = false;
let aa = null;
let b;
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof aa);
console.log(typeof b);
// Template literal (` back tick` )
let myName = "Pakistan";
console.log(`I Love ${myName}.`);
console.log(`I Love ${myName}. "My name is Faraz".`);
console.log(`I Love Travelling `);
console.log(`
    I live in lahore
    I live in ${myName}
    I love to visit northren area
    I love to learn coding


`);
// Typescript Arithmetic Operatiors
let abc = 9;
let def = 5;
// addition (+) : add two operends togather;
let ab = abc + def;
console.log("Addition", ab);
let cd = abc * def;
console.log(`multiplication result = ${cd}`);
let ef = abc / def;
console.log("division", ef);
let gh = abc - def;
console.log("substraction", gh);
let gh1 = abc % def;
console.log("modulus return the reminder after division of the first operand by the 2nd ", gh1);
