// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
  cats.push(Ralph);
}
function destructivelyPrependCat(Bob){
  cats.unshift(Bob);

}
function destructivelyRemoveLastCat(Garfield){
  cats.pop(Garfield);
}
function destructivelyRemoveFirstCat(Milo){
  cats.shift(Milo);
}
function appendCat(Milo){
  const newCats = [...cats, Milo];
  return newCats;

}
function prependCat(Arnold){
  const newCats = [Arnold, ...cats];
  return newCats;
}
function removeLastCat(){
  const newCats = cats.slice(0,-1);
  return newCats;
}
function removeFirstCat(){
  const newCats = cats.slice(1);
  return newCats;
}