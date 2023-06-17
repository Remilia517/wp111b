function vdot(a,b) {
    let c = 0;
    for (let i = 0;i < a.length;i++) {
        c += a[i]*b[i];
    }
    
    return c;
  }
  
  let v1 = [4,9];
  let v2 = [5,9];
  let dot = vdot(v1,v2);
  console.log(dot);
  