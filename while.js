// #1.  Тооны цифрийн нийлбэрийг олох. (let n = 1234)
// let n = 1234;
// let sum = 0;
// while (n > 0) {
//   let last = n % 10;
//   sum += last;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// #2. Тоог урвуулан бичих (let num = 12345 -> 54321)
// let num = 12345;
// let sum = 0;
// while (num > 0) {
//   let last = num % 10;
//   sum = sum * 10 + last;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// #3. Цифрийн тоо ол (let a = 98765 -> 5)
// let num = 98765;
// let sum = 0;
// while (num > 0) {
//   num = Math.floor(num / 10);
//   sum++;
// }
// console.log(sum);

// #4. Зэрэг (power) бодох (let base = 3; let exp = 4)
// let base = 3;
// let exp = 4;
// let sum = 1;
// let a = 1;
// while (a < exp) {
//   sum = base ** exp;
//   a++;
// }
// console.log(sum);
// #5. Палиндром тоо эсэхийг шалгах (let num = 1221)
// let num = 1221;
// let sum = 0;
// let sum1 = num;
// while (num > 0) {
//   let last = num % 10;
//   sum = sum * 10 + last;
//   num = Math.floor(num / 10);
// }
// if (sum1 === sum) {
//   console.log(sum1 + " палиндром тоо мөн");
// } else {
//   console.log(sum1 + " палиндром тоо биш");
// }

// #6. Фибоначчийн дараалал  (let n1 = 0, n2 = 1, n = 7, i = 0;)
// let num1 = 0;
// let num2 = 1;
// let num = 7;
// let i = 0;
// while (i < num) {
//   let last = num1 + num2;
//   num1 = num2;
//   num2 = last;
//   i++;
//   console.log(num2);
// }

// #7. Факториал олох (let num1 = 5;)
// let num = 5;
// let sum = 1;
// let a = 1;
// while (a <= num) {
//   sum = sum * a;
//   a++;
// }
// console.log(sum);

// do while

// #1. 1–10 хооронд тоо авах (Math.random -> 1-100)
let randomNum = Math.floor(Math.random() * 10) + 1;
// do {
//   console.log(randomNum);
// } while (randomNum >= 10);

// #2. Сөрөг input орох хүртэл нийлбэр гаргах (let sum3 = 0; let input = 5;)
// let input = 5;
// let sum = 3;
// let sum1 = 1;
