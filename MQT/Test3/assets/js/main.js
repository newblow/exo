// PASCAL CASE -> FirstLetter
// CAMEL CASE -> firstLetter
// KEBAB CASE -> first-letter
// SNAKE CASE -> first_letter

import SendToConsole from "./send.js";
SendToConsole("Sekou", "Meaux");

import { Add, Soustract, Multiply, Divide } from "./operation/operation.js";
Add(1, 1);
Soustract(10, 5);
Multiply(3, 3);
Divide(100, 2);

const Scope = () => {
  let myScope = 1;
  console.log(myScope);
  if (myScope === 1) {
    let secondScope = 2;
    console.log(secondScope);
  }
};
// Scope();

const Array = () => {
  let body = document.getElementById("body");
  let student = ["Chloé", "Bollo", "Florian"];
  let newStudent = "Sekou";
  console.log(student[0]); // Récupérer l'index du tableau
  student.push("Lucas"); // Ajoute un élément au tableau
  console.log(student);
  student.pop();
  console.log(student);
  student.push(newStudent);
  console.log(student);

  student.map((stud) => {
    let element = document.createElement("p");
    element.innerHTML = `Je m'apelle ${stud}`;
    body.append(element);
    // console.log(`Je m'apelle ${stud}`);
  });
};
// Array();

let obj = {
  key: "value",
  car: {
    price: 1500,
    color: "red",
    country: {
      europe: "France",
      usa: "",
    },
  },
};
console.log(obj.car);

let person = {
  name: "Bollo",
  city: "Meaux",
};
console.log(person);

let allStudent = [
  {
    name: "Bollo",
    city: "Meaux",
  },
  {
    name: "Florian",
    city: "Meaux",
  },
];
console.log(allStudent);

//const SendToConsole = (name, city) => {
  // METHOD 1
  //   console.log("Je m'appelle " + name + " et je vis à " + city);
  //   METHOD 2
  console.log(`Je m'appelle ${name} et je vis à ${city} !`);
//};

//export default SendToConsole;

//const getPerson = (firstname, lastname) => {
 // console.log (`monprénom est ${firstname} et mon nom est ${lastname}`);
//}
//getPerson("Florian", "Sabine");


const getPerson = (firstname, lastname) => {
  console.log(`monprénom est ${firstname} et mon nom est ${lastname}`);
};
getPerson("Florian", "Sabine");

const Add = (value1,value2) => {
  console.log(value1+value2)
  console.log(`le totale de la somme est ${value1+value2}`)
};
Add(5,5);

let color = ["green", "red", "yellow"];
console.log(color);
let [color1, color2, ...rest] = array;
console.log(array)

