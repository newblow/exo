// Lister l'ensemble des types primitifs et y associer une définition de leur utilité

let string = "string"; // manipule les chaînes de caractères
let number = 1; // manipule les nombres
let object = {}; // contient des clés et des valeurs
let boolean = true || false; // Renvoie vrai ou faux
let nul = null; // Variable existante mais sans valeur
let und = undefined; // N'existe pas
// let bigInt = new BigInt(); // Manipule les nombres high order
// let symbol = new Symbol(); // Symbole
let array = []; // Gère les collections

// Créer un cas d'exemple pour les différences entre : let, var et const

var test = 1;
var test = {};
var test = "salut"; // Problème car j'ai pu déclarer trois fois la variable test en changeant sa valeur

let testons = 2;
testons = 1;
// let testons = 3; // Problème car la variable testons existe déjà et je ne peut la redéclarer

const seconds = 60;
// const seconds = 45;
// seconds = 10; // Problème car je ne peut réassigner et redéclarer

// Créer un dossier contenant au moins deux scripts différents avec une ou plusieurs fonctions

import ScriptA from "./functions/scriptA.js";
import { ScriptB } from "./functions/scriptB.js";
ScriptA();
ScriptB();

// Créer une variable contenant un tableau puis itérer dessus

let arr = ["A", "B", "C", "D"];
arr.map((element) => {
  console.log(element);
});

// Créer un objet contenant plusieurs éléments key/value

let obj = {
  name: "acs",
  city: "meaux",
  zip: "77100",
  email: "test@test.fr",
  tel: "071616192",
};
console.log(obj); // Récupère l'objet global
console.log(obj.city); // Récupère une clé précise de l'object

// Créer une classe et un héritage possédant des fonctions
class Phone {
  constructor(color, price, mark, stockage) {
    this.color = color;
    this.price = price;
    this.mark = mark;
    this.stockage = stockage;
  }
}

class NewPhone extends Phone {
  constructor(color, price, mark, stockage) {
    super(color, price, mark, stockage);
  }

  getColor() {
    return `La couleur de mon téléphone est ${this.color}`;
  }

  getStockage() {
    return `Le stockage de mon téléphone est de ${this.stockage}`;
  }
}

// Instancier la classe avec le mot clé : new

let Bollo = new NewPhone("white", 2000, "Samsung Fold Z", 500);
console.log(Bollo); // Récupère l'objet global de la classe
console.log(Bollo.getStockage()); // Execute la fonction
console.log(Bollo.getColor()); // Execute la fonction

// BONUS : Instancier une date avec le mot clé : new
let date = new Date();
console.log(date);

// BONUS : Afficher la classe en HTML
let phoneColor = document.getElementById("phone-color");
let phonePrice = document.getElementById("phone-price");
let phoneMark = document.getElementById("phone-mark");
let phoneStockage = document.getElementById("phone-stockage");

let color = Bollo.color;
let price = Bollo.price;
let mark = Bollo.mark;
let stockage = Bollo.stockage;

phoneColor.append(color);
phonePrice.append(price);

