// ------------------while------------------
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

// ------------------do while----------------

// #1. 1–10 хооронд тоо авах (Math.random -> 1-100)
// let randomNum;
// do {
//   randomNum = Math.floor(Math.random() * 10) + 1;
// } while (false);
// console.log(randomNum);

// #2. Сөрөг input орох хүртэл нийлбэр гаргах (let sum3 = 0; let input = 5;)
// let input = 5;
// let sum = 0;
// do {
//   input = Number(prompt("too oruulna uu (surug bol zogsono):"));
//   if (input >= 0) {
//     sum += input;
//   }
// } while (input >= 0);
// console.log("niilber:", sum);

// let input = -8;
// let sum = 0;
// do {
//   input = Number(prompt("too oruulna uu (eyreg bol zogsono"));
//   if (input <= 0);
//   sum -= input;
// } while (input <= 0);
// console.log("niilber", sum);

// #3. 3-ийн хүрд хэвлэх
// let num = 3;
// let i = 1;
// do {
//   console.log(num + " x " + i + " = " + num * i);
//   i++;
// } while (i <= 10);

// #5. Нууц үг шалгах (3 оролдлого) (let password = "your name“, let attempt; let tries = 0; const maxTries = 3;) prompt ашиглах
// let password = "passs";
// let attempt;
// let tries = 0;
// const maxTries = 3;
// do {
//   attempt = prompt("nuuts ug oruulna uu:");
//   tries++;

//   if (attempt === password) {
//     console.log("nuuts ug zuv baina!");
//     break;
//   } else {
//     console.log("buruu nuuts ug. uldsen oroldlogo" + (maxTries - tries));
//   }
// } while (tries < maxTries);
// if (attempt !== password) {
//   console.log("ta 3 udaa buruu oruulsan tul nevtreh bolomjgui");
// }
