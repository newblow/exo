console.log("test");
console.error ("error");

var firstname = "florian";
console.log(firstname);


let lastName = "alerte";
console.log(lastName);

const city = "Meaux";
console.log (city);

firstname = 1;
//console.log(firstname);

//peut être ré assigné mais pas re déclaré
//LET lastName = &;
// console.log(lastname);
//Ne peut être re déclareer et réé assigner 
// cons city = "Paris"
//console.log(city);

//TYPE PRIMITIF

let string = "abdef"
let number = 1;
let boolean = true || false;
let array = [];
let objet = '{}';
let nulll = null;
//  = undifined = undefined
// let symbol = symbol();
// let bingInt = bigInnt()
function MyFirsFunction (name, age) => {
    // alert ("Salut !");
    // console.log(Bonjour, je m'appel "name + et j'ai")
    // console.log (bonjour je m'appelle ${name} et j'ai ${age} ans!");
};
MyFirsFunction("Florian", 31);
MyFirsFunction("Haykel", 22);
MyFirsFunction("Bollo", 26);

let btnBronze = document.getElementById("btBronze");
console.log(btnBronze); btnBronze.addEventListener("click", () => {
    alert("Vous avez choisi l'offre bronze !"); 
});

let input1 = document.getElementById("input-1");
let input2 = document.getElementById("input-2");
let btnSubmit = document.getElementById("btn-submit");

