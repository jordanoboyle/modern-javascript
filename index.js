
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

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

var newDate = moment().add(10, 'days').calendar();  
console.log(newDate);

let czechDate = moment().format('LLL');
console.log(czechDate);