const aaa = "aaaa";
const bbb = 123;
// 1 tsagiig minut ruu shiljuuleh
const hour = "60";
console.log(hour * 2);
console.log(hour * 12);
console.log(hour * 2 + 30);
// 2 tegsh "even" or sondgoi "odd"
let a = 2,
  b = 7,
  c = 1;
console.log(a % 2 === 0 && "even");
console.log(b % 2 === 1 && "odd");
console.log(c % 2 === 1 && "odd");
// 3 usuh daraalal tiim "true" or ugui "false"
const numbers = (a, b, c) => a < b && b < c;
console.log(numbers(1, 8, 3));
console.log(numbers(1, 3, 8));
// 4 hamgiin ih utga
const ihtoo = (a, b, c) => Math.max(a, b, c);
console.log(ihtoo(9, 4, 3));
console.log(ihtoo(1, 7, 5));

const bagatoo = (a, b, c) => Math.min(a, b, c);
console.log(bagatoo(2, 3, 4));
console.log(bagatoo(20, 30, 40));
// 5 buurah erembe
const points = [40, 60, 90, 10, 30];
points.sort(function (a, b) {
  return b - a;
});
console.log(points);
// 6 ugugdsun gurvaljnii perimetriig ol.
