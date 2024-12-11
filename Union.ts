//Union | (OR)
// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}.`)
//   }
  
//   printStatusCode(404);
//   printStatusCode('404');


//Union Type Errors
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'.


