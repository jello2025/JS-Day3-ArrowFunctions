

  //task 1

  const greet = (name) => {
    return `Hello, ${name}!`;
  }

  console.log(greet("shaikha"));

  //task 2


  const sum = (num1, num2) => {
    return num1 + num2
  }

  console.log(sum(3, 5));

  //task 3

  const square = (number) => {
    return number * number
  }

  console.log(square(5));

  //challenge 

  

const numbers = [3, 4, 8, 10, 45, 98]

let squared = [];

numbers.forEach(  (digit)=>{
    let digitSquared = digit * digit
    squared.push(digitSquared)

}  )

console.log(squared);