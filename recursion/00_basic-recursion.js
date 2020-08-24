let wr = (msg='--------') => document.write(`<br>${msg}`);

function basicRecursion(max, current) {
  // Base Case
  if (current > max) return;
  
  wr(current);
  
  // Recursion
  basicRecursion(max, current+1);
}

basicRecursion(5,1);
