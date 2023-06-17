function repeat(f, n) {
    let c = [];
    for (let i = 0;i < n;i++) {
      c.push(f());
    }
    return c;
  }
  
  let number = repeat(Math.random, 10);
  console.log(number);