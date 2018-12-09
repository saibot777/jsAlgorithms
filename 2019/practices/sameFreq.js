function sameFrequency(n1, n2){
    const arrN1 = [...String(n1)];
    const arrN2 = [...String(n2)];
    
    if (arrN1.length !== arrN2.length) return false
 
    const hashTable = arrN1.reduce((acc, next) => {
        acc[next] = ++acc[next] || 1;
        return acc;
    }, {});
  
  return arrN2.every(n => 
    !hashTable[n] ? false : (--hashTable[n], true)
  ); 
}