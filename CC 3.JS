//Implement a program which will take 1 parameter as input and print fibonacci numbers upto that input. Constraints: 1 <= n <= 1000000

function Fibonacci(n) {
    for (var fibonacci = [0, 1], i = 1; i < n; i++) 
      fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  
    return fibonacci
  }
  
  console.log(  Fibonacci(10)  )