module.exports = function solveEquation(equation) {
  var answer = [];
  var key = /([+-]?[^^]\s?\d+)/g;
  equation = equation.replace(/\s+/g, '');
  var result = equation.match(key);
  return calculate(result[0], result[1], result[2]);
}

function calculate(a, b, c) {
  var d = Math.pow(b, 2) - 4*a*c;
  var x1 = (-b + Math.sqrt(d, 0.5))/(2*a);
  var x2 = (-b - Math.sqrt(d, 0.5))/(2*a);
  return [Math.round(x1), Math.round(x2)].sort((a, b) => a - b);
}