const marvel_heroes =["spiderman", "thor", "ironman"]
const dc_heroes=["shakitmaan", "naagraj", "doga"]

//marvel_heroes.push(dc_heroes) // it pushes 1 array into another
//console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

//const all_heroes=marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

//merge two arrays-> spread operator
const allHeroes=[...marvel_heroes, ...dc_heroes]
// console.log(allHeroes);

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]