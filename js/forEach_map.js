/*
Можете ли вы описать основное различие между циклом forEach и циклом .map()? И в каких случаях каждый из них используется?
.forEach() перебирает массив и изменяет его.
.map() создает копию массива и изменяет копию.
*/

let arr = [1, 2, 3]

//forEach()
arr.forEach(item => console.log(item +1)) // 2, 3, 4

//map()
let retArr = arr.map(item => item +1)
console.log(retArr) // [2, 3, 4]

