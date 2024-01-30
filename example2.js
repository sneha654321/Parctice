//FUNCTIONS
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
var add = function (a, b, c /*?*/) {
    if (c === void 0) { c /*?*/ = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'ninja');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
var add1 = function (a, b, c /*?*/) {
    if (c === void 0) { c /*?*/ = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'ninja');
var minus1 = function (a, b) {
    return a + b;
};
var result1 = minus(10, 7);
console.log(result);
//Function Snignatures
// let greet: Function;
// example 1
var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
greet("Anusha", "Hello");
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
//Classes
/*class Invoice {
    client: string;
    details: string;
    amount: number;
  
    constructor(c: string, d: string, a: number){
      this.client = c;
      this.details = d;
      this.amount = a;
    }
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }
  
  const invOne = new Invoice('mario', 'work on the mario website', 250);
  const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
  
  let invoices: Invoice[] = [];
  invoices.push(invOne)
  invoices.push(invTwo);
  // invoices.push({ name: 'shaun' });
  
  console.log(invoices);*/
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
