class Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      return a - b;
    }
  
    multiply(a: number, b: number): number {
      return a * b;
    }
  
    divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  }
  
  
  const calculator = new Calculator();
  console.log(calculator.add(5, 2));      
  console.log(calculator.subtract(8, 3)); 
  console.log(calculator.multiply(4, 6)); 
  console.log(calculator.divide(10, 2));  
  console.log(calculator.divide(8, 0));   
  