function isPrime(n){
    for (let i = 2;i < n;i++){
        if(n%i === 0) return false
    }
    return true
}

console.log('isPrime(131)=', isPrime(131))
console.log('isPrime(52)=', isPrime(52))