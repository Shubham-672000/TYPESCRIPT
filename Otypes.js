// const car: { type: string, model: string, year: number } = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
//   };
//   console.log(car);
//Type Inference
// const car = {
//     type: "Toyota",
//   };
//   car.type = "Ford"; // no error
//   car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
//   console.log(car);
//Optional Properties
// const car: { type: string, mileage?: number } = {
//     type: "Toyota"
//   };
//   car.mileage = 2000;
//   console.log(car);
//Index Signatures
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
