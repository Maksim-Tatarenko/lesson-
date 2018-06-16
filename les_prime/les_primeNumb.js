function isPrime(value) {
  if (isNaN(value) || !isFinite(value) || value%1 || value<2) return false; 
  var max=Math.floor(Math.sqrt(value));
  for (var i = 2; i <= max; i++) {
    if (value%i==0) {
      return false;
    }
  }
  return true;
}

var primaryNumber = [];
for (var i = 1; i <= 100; i++) {
  if(isPrime(i)) 
    primaryNumber.push(i);
}

  for (var i = 0; i < primaryNumber.length; i++)
    console.log('1 и ' + primaryNumber[i]);
