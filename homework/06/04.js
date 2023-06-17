function mmul(a, b) {
    let A1 = a.length;
    let B1 = a[0].length;
    let B2 = b[0].length;
    let c = new Array(A1);
    
    for (let i = 0;i < A1;i++) {
      c[i] = new Array(B2);
      for (let j = 0;j < B2;j++) {
        c[i][j] = 0;
        for (let k = 0;k < B1;k++) {
          c[i][j] += a[i][k]*b[k][j];
        }
      }
    }
  
    return c;
  }
  
  let v1 = [[4,9],[5,9],[9,9]];
  let v2 = [[8,7],[6,3],[7,4]];
  let dot = mmul(v1, v2);
  console.log(dot);
  