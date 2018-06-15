// Функция, которая проверяет является ли число простым
function isPrime(value) {
  if (isNaN(value) || !isFinite(value) || value%1 || value<2) return false; 
  var max=Math.floor(Math.sqrt(value));
  for (var i=2;i<=max;i++) {
    if (value%i==0) {
      return false;
    }
  }
  return true;
}
// создать массив, который будет содержать простые числа от 2 до 100
var primaryNumber = [];
for (var i = 1; i <= 100; i++) {
  if(isPrime(i)) 
    primaryNumber.push(i);
}
// вывести в консоль простые числа от 2 до 100
console.log(primaryNumber);