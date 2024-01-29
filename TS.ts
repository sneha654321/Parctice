const json = JSON.parse("55");
console.log(typeof json);
let w: unknown = 1; 
w = "string"; // no error

w = { 
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  } 
} as { runANonExistentMethod: () => void }

if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod(); 
} 
//ARRAYS
onst names: string[] = [];

names.push("Dylan"); // no error

names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

console.log(names);

//TUPLES

let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push('Something new and wrong');
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
ourReadonlyTuple.push('Coding God took a day off');


//OBJECT TYPES
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
console.log(car);

//ENUMS
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
};
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
