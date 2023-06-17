function madd(a,b) {
    let c = [];
    for (let i = 0;i < a.length;i++) {
        c[i] = [];
        for (let j = 0;j < a[0].length;j++){
            c[i][j] = a[i][j]+b[i][j];
        }
    }
    
    return c;
  }
  
  let v1 = [[4,9],[5,9]];
  let v2 = [[8,7],[6,3]];
  let sum = madd(v1, v2);
  console.log(sum);
  