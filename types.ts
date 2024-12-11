//Type: any
// let v: any = true;

// v = "string"; // no error as it can be "any" type


// console.log(Math.round(v)); // no error as it can be "any" type


//Type: unknown

// let w: unknown = 1; 
// w = "string"; // no error

// w = { 
//   runANonExistentMethod: () => {
//     console.log("I think therefore I am");
//   } 
// } as { runANonExistentMethod: () => void }


// if(typeof w === 'object' && w !== null) {
//   (w as { runANonExistentMethod: Function }).runANonExistentMethod(); 
// } 


//Type: never
//let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.


//Type: undefined & null
let y: undefined = undefined;
console.log(typeof y);

let z: null = null;
console.log(typeof z);