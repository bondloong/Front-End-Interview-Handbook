/*
This - динамическое ключевое слово, которое всегда указывает на контекст, в котором оно применяется
*/

// this в глобальной области в
console.log(this); // object Window

// this внутри функции
function myFunction() {
  console.log(this); // object Window
}

// this внутри функции с использованием строгого режима
function myFunction() {
  "use strict";
  console.log(this); // undefind
}

//this внутри объекта с обычной функцией указывает на объект в котром находится, не смотря на любую вложенность
const obj1 = {
  hello: "Hello",
  showThis: function () {
    console.log(this); // {hello: 'Hello', getName: ƒ}
  },
};

//this внутри объекта со стрелочной функцией указывает на внешний контекст объекта
const obj2 = {
  hello: "Hello",
  showThis: () => {
    console.log(this); // object Window
  },
};

//Обращение к this из функции, которая была объявлена за пределами объекта, а потом назначена в качестве его метода
const obj3 = {
  hello: "Hello",
};

//Обычная функция
function showThisFunc() {
  console.log(this);
}
obj3.showThis = showThisFunc;
obj3.showThis(); // {hello: 'Hello', showThis: ƒ}

//Стрелочная функция
const showThisArrow = () => {
  console.log(this);
};
obj3.showThis = showThisArrow;
obj3.showThis(); // object Window

//При вызове this в переменной, созданной с ключевым словом new - this будет ссылаться на него, как на объект
string = new String("string");
string.showThis = function () {
  console.log(this);
};

string.showThis(); // {'string', showThis: ƒ}

/*
Чтобы поменять контекст вызова объектов в функциях - ипользуются методы call, apply, bind. Отличае call, apply от bind в том, что они вызываются сразу 
*/
var obj = { num: 2 };

function add(a, b){
    return this.num + a + b;
}

const resultCall = add.call(obj, 3, 5);
const resultApply = add.apply(obj, [3, 5]);
const funcBind = add.bind(obj, 3, 5)
const resultBind = funcBind();

console.log(resultCall, resultApply, resultBind);

/* Call */
//Call() для создания цепочек конструкторов объектов
function Item(name, price) {
  this.name = name;
  this.price = price;
  this.description = `${this.name}, ${this.price}€`;
}

function Car(name, price) {
  Item.call(this, name, price);
  // Здесь вы можете добавить другие поля, специфичные для Car
}

function Fruit(name, price) {
  Item.call(this, name, price);
  // Здесь вы можете добавить другие поля, специфичные для Fruit
}

const bmwCall = new Car("BMW", 120000); // bmw.description = 'BMW, 120000€'
const bananaCall = new Fruit("Banana", 1); // banana.description = 'Banana, 1€'

//Call() для вызова анонимной функции
const queue = [{ name: "Matt" }, { name: "Jack" }];

for (let i = 0; i < queue.length; i++) {
  (function (i) {
    this.displayInfo = function () {
      console.log(`Position ${i}: ${this.name}`);
    };
    this.displayInfo();
  }.call(queue[i], i));
}
/*
Position 0: Matt
Position 1: Jack
*/

//Call() для выполнения функции с объектом
var obj = { num: 2 };

function add(a, b){
    return this.num + a + b;
}

console.log(add.call(obj, 3, 5));

/* Apply */
//Apply() для добавления одного массива к другому
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];numbers.push.apply(numbers, moreNumbers);
console.log(numbers); //[1,2,3,4,5,6]

// Apply() для создания цепочки конструкторов объектов

function Item(name, price) {
    this.name = name;
    this.price = price;
    this.description = `${this.name}, ${this.price}€`;
}
    
function Car(details) {
    Item.apply(this, details);
    // Здесь вы можете добавить другие поля, специфичные для Car 
}
    
function Fruit(details) {
    Item.apply(this, details);
    // Здесь вы можете добавить другие поля, специфичные для Fruit 
}
    
const carDetails = ["BMW", 120000]
const bmwApply = new Car(carDetails);

const fruitDetails = ["Banana", 2]
const bananaApply = new Fruit(fruitDetails);

/* Bind */
// Bind() для создания связанной функции
var obj = { num: 2 };

function add(a, b){
return this.num + a + b;
}

const funcAddBind = add.bind(obj, 3, 5);
funcAddBind(); // 10

// Bind() для обеспечения работы SetTimeout
let person = {
    name: 'John',
    getName: function() {
        console.log(this.name);
    }
};
    
// Обычный вызов
let funcGetName = person.getName;
window.setTimeout(funcGetName, 1000);

//Вызов с Bind
let funcGetNameBind = person.getName.bind(person);
setTimeout(funcGetNameBind, 1000);
