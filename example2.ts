//FUNCTIONS
// let greet: Function = () => {
//   console.log('hello, world');
// }

// greet = 'hello';

// greet = () => {
//   console.log('hello, again');
// }

const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
  }
  
  add(5, 10, 'ninja');
  
  const minus = (a: number, b: number): number => {
    return a + b;
  }
  
  let result = minus(10,7);
  console.log(result);

  // let greet: Function = () => {
//   console.log('hello, world');
// }

// greet = 'hello';

// greet = () => {
//   console.log('hello, again');
// }

const add1 = (a: number, b: number, c/*?*/: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
  }
  
  add(5, 10, 'ninja');
  
  const minus1 = (a: number, b: number): number => {
    return a + b;
  }
  
  let result1 = minus(10,7);
  console.log(result);

  //Function Snignatures
  // let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}
greet("Anusha","Hello");
// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}

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
  class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor(
      readonly client: string, 
      private details: string, 
      public amount: number,
    ){}
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }
  
  const invOne = new Invoice('mario', 'work on the mario website', 250);
  const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
  
  let invoices: Invoice[] = [];
  invoices.push(invOne)
  invoices.push(invTwo);
  
  invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
  })