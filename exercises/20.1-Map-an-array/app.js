let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value) {
  let fahrenheit = (value * 9/5) + 32;
  return fahrenheit;
});

console.log(arrayOfFahrenheitValues);
