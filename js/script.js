console.log('Hello World');
let a = +prompt()
let b = +prompt()
let f1 = a ** 2 + 2 * a * b + b ** 2
console.log(f1, '- (a + b)^2');
let f2 = a ** 2 - 2 * a * b + b ** 2
console.log(f2, '- (a - b)^2');
let f3 = (a - b) * (a + b)
console.log(f3, '- a^2 - b^2');
let f4 = a ** 3 + 3 * a ** 2 * b + 3 * a * b ** 2 + b ** 3
console.log(f4, '- (a + b)^3');
let f5 = a ** 3 - 3 * a ** 2 * b + 3 * a * b ** 2 - b ** 3
console.log(f5, '- (a - b)^3');
let f6 = (a + b) * (a ** 2 - a * b + b ** 2)
console.log(f6, '- a^3 + b^3');
let f7 = (a - b) * (a ** 2 + a * b + b ** 2)
console.log(f7, '- a^3 - b^3');

