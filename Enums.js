//Numeric Enums - Default
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
//   };
//   let currentDirection = CardinalDirections.North;
//   // North is the first value so it logs '0'
//   console.log(currentDirection);
//Numeric Enums - Initialized
// enum CardinalDirections {
//     North = 1,
//     East,
//     South,
//     West
//   };
//   // logs 1 since we initialized the first value to something other than '0'
//   console.log(CardinalDirections.North);
//   // logs 4 as it continued on from the initial '1' value
//   console.log(CardinalDirections.West);
//Numeric Enums - Fully Initialized
// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   };
//   // logs 404
//   console.log(StatusCodes.NotFound);
//   // logs 200
//   console.log(StatusCodes.Success);
//String Enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
