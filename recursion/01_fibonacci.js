function fibonacci(n) {
  // Base Case
  if (n <= 2) { return 1; }
  
  // Recursive Case
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Adding to DOM
let wr = (msg='--------') => document.write(`<br>${msg}`);

// Calling fibonacci
for (let i = 1; i <= 20; i++) {
  wr(`${i}. ${fibonacci(i)}`);
}
