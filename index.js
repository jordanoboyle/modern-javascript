/* global moment*/ 
function spaceBar() {
  let i = 0;
  let space = "";
  while (i < 20) {
    space += "#";
    i ++;
  }
  return console.log(space); 
}
spaceBar();

var moment = require('moment'); // require
moment().format(); 

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

var newDate = moment().add(10, 'days').calendar();  
console.log(newDate);

let czechDate = moment().format('LLL');
console.log(czechDate);

import { sqrt } from 'mathjs';

console.log(sqrt(-4).toString()); // 2i
console.log(sqrt(4).toString()) // 2
console.log(sqrt(-4).toString()) // NaN

spaceBar();

let evens = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

console.log(odds);
console.log(evens);

let menuItems = {
  item1: {food: "cordon bleu", price: 35},
  item2: {food: "Bistro burger", price: 25}
};
console.log(`Ordered the ${menuItems.item2.food}. Total: ${menuItems.item2.price}.`);
console.log(`Ordered the ${menuItems.item1.food}. Total: ${menuItems.item1.price}.`);

console.log("This is new");

console.log("This is newer");
