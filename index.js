const aaa = "aaaa";
const bbb = 123;
// 1 цагийг минут руу шилжүүлэх.
const hour = "60";
console.log(hour * 2);
console.log(hour * 12);
console.log(hour * 2 + 30);
// 2 тэгш "even" or сондгой "odd".
let a = 2,
  b = 7,
  c = 1;
console.log(a % 2 === 0 && "even");
console.log(b % 2 === 1 && "odd");
console.log(c % 2 === 1 && "odd");
// 3 өсөх дараалал тийм "true" or үгүй "false".
const numbers = (a, b, c) => a < b && b < c;
console.log(numbers(1, 8, 3));
console.log(numbers(1, 3, 8));
// 4 хамгийн их утга.
const ihtoo = (a, b, c) => Math.max(a, b, c);
console.log(ihtoo(9, 4, 3));
console.log(ihtoo(1, 7, 5));

const bagatoo = (a, b, c) => Math.min(a, b, c);
console.log(bagatoo(2, 3, 4));
console.log(bagatoo(20, 30, 40));
// 5 буурах эрэмбэ.
const points = [40, 60, 90, 10, 30];
points.sort(function (a, b) {
  return b - a;
});
console.log(points);
// 6 өгөгдсөн гурвалжны периметрийг ол.
const perimetr = (a, b, c) => a + b + c;
console.log(perimetr(3, 4, 5));
console.log(perimetr(6, 7, 8));
// 7 бүхэл тооны нийлбэрийг ол.

// 8 өгөгдсөн тэгш өнцөгтийн талбай ба периметрийг ол.
const talbai = (a, b, s) => (s = a * b);
console.log(talbai(10, 5));

const perimetrs = (a, b, p) => (p = (a + b) * 2);
console.log(perimetrs(10, 5));
// 9 өгөгдсөн секундыг минут секунд болго.
