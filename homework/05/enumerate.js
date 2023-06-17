function truthTable(n) {
    const values = new Array(n).fill(0);
    enumerateTable(n, values);
  }
  
  function enumerateTable(n, values) {
    if (n === 0) {
      console.log(values);
    } 
    else {
      values[n - 1] = 0;
      enumerateTable(n - 1, values);
  
      values[n - 1] = 1;
      enumerateTable(n - 1, values);
    }
  }
  truthTable(values);