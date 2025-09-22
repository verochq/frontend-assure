console.log("Starting calculation...");

let productName = "Espresso Machine";
const prices = [120, 30, 15]; // base price, shipping, handling
const discountValue = 0.1;

const calculateSubTotal = () => prices[0] + prices[1] + prices[2];
const getDefaultDiscount = () => discountValue;
const applyDiscount = (amount) => amount - amount * discountValue;
const addTax = () => {
  let rate = 0.08;
  return (amount) => amount + amount * rate;
};

console.log("Product:", productName);
console.log("Subtotal:", calculateSubTotal());
console.log("Subtotal after assignment:", calculateSubTotal()); // C

const discountRate = () => getDefaultDiscount(); // D
console.log("Discount rate:", discountRate); // E

console.log("Discount rate after assignment:", discountValue); // F

console.log("Total after discount:", applyDiscount(calculateSubTotal())); // G

console.log(
  "Taxed total (incl. 8%):",
  addTax()(applyDiscount(calculateSubTotal()))
); // H

productName = "Deluxe Espresso Machine";
console.log("Final product name:", productName);

/* 
1. Reemplacé todos los var por let o const: productName usa let porque se reasigna, el resto usa const para inmutabilidad y prevención de reasignacion.
2. Convertí todas las funciones en expresiones de función asignadas a constantes, eliminando el hoisting de funciones.
3. Mover todas las declaraciones al inicio del scope asegura que las variables y funciones se usen solo después de ser definidas, evitando temporal dead zone y valores undefined.
*/
