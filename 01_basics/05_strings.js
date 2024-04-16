const name="diksha"
const repoCount=3

console.log(`Hello1 My name is ${name} and my repo count is ${repoCount}`);

//another way to declare string
const gameName= new String('deeksha')
console.log(gameName);
console.log(gameName[5]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('s'));

const newString= gameName.substring(0,3);
console.log(newString);

const another=gameName.slice(-5,5)
console.log(another);

const newString1='     diiksha  '
console.log(newString1)
console.log(newString1.trim());

const url= 'https://hit.com//hit%20esh'
console.log(url.replace('%20', '-'));
console.log(url.includes('dee'))

const nString='deeksha'
console.log(nString.split('k'))