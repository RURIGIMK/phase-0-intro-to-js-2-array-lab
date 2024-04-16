const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  const newCats = [...cats];
  newCats.push("Ralph");
  return newCats;
}

function destructivelyPrependCat(name) {
  const newCats = [...cats];
  newCats.unshift("Bob");
  return newCats;
}

function destructivelyRemoveLastCat() {
  const newCats = [...cats];
  newCats.pop();
  return newCats;
}

function destructivelyRemoveFirstCat() {
  const newCats = [...cats];
  newCats.shift();
  return newCats;
}

function appendCat(name) {
  const newCats = [...cats];
  newCats.push(name);
  return newCats;
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  const newCats = [...cats];
  newCats.pop();
  return newCats;
}

function removeFirstCat() {
  const newCats = [...cats];
  newCats.shift();
  return newCats;
}

