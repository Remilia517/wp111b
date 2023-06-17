function vadd(a,b) {
    let c = [];
    for (let i = 0;i < a.length;i++) {
        c[i] = a[i]+b[i];
    }
    
    return c;
  }
  
  // 測試程式碼
  let v1 = [4,9];
  let v2 = [5,9];
  let sum = vadd(v1, v2);
  console.log(sum);
  