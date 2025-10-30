// for (i = 1; i < 10; i++) {
//   console.log("Pinecone" + i);
// }
// #1. Pinecone гэж 1 удаа хэвлэ.

// for (index = 1; index <= 1; index++) {
//   console.log("Pinecone" + index);
// }

// #2. Pinecone гэж 10 удаа хэвлэ.
// for (index1 = 1; index1 <= 10; index1++) {
//   console.log("Pinecone" + index1);
// }

// #3. Pinecone гэж n удаа хэвлэ.
// const n = 20;
// for (index2 = 1; index2 <= n; index2++) {
//   console.log("Pinecone" + index2);
// }

// #4. 20 хүртэлх сондгой тоонуудыг хэвлэ.
// for (a = 1; a <= 20; a += 2) {
//   console.log(a);
// }

// #5. 40 хүртэлх тэгш тоонуудыг хэвлэ.
// for (a = 2; a <= 40; a += 2) {
//   console.log(a);
// }

// #6. 20 хүртэлх тэгш тоонуудын нийлбэрийг ол.
// let sum = 0;
// for (a = 0; a <= 20; a += 2) {
//   sum += a;
// }
// console.log(sum);

// #7. 40 хүртэлх сондгой тоонуудын нийлбэрийг ол.
// let sum = 0;
// for (a = 1; a <= 40; a += 2) {
//   sum += a;
// }
// console.log(sum);

// #8. Өгөгдсөн n тооны нийлбэрийг ол.
// const n = 6;
// let sum = 0;
// for (a = 0; a <= n; a++) {
//   sum += a;
// }
// console.log(sum);

// #9. 100 гийн тоог n удаа нэм. (Example: 10, Result:1000)
// const n = 10;
// let sum = 0;
// for (a = 1; a <= n; a++) {
//   sum = sum + 100;
// }
// console.log(sum);

// #10. 5 хүртэлх тооны үржвэрийг ол.
// let sum = 1;
// for (a = 1; a <= 5; a++) {
//   sum = sum * a;
// }
// console.log(sum);

// #11. 5 хүртэлх сондгой тооны үржвэрийг ол.
// let sum = 1;
// for (a = 1; a <= 7; a += 2) {
//   sum *= a;
// }
// console.log(sum);

// #12. n тооны factorial ийг ол.
// const n = 4;
// let sum = 1;
// for (a = 1; a <= n; a++) {
//   sum = sum * a;
// }
// console.log(sum);

// #13. 10 аас 1 рүү буурах дарааллаар хэвлэ.
// for (a = 10; a >= 1; a--) {
//   console.log(a);
// }

// #14. Өгөгдсөн n тооны хүрдийг харуул. Example: 3*1=3; 3*2=6; 3*3=9; 3*4=12; 3*5=15; 3*6=18; 3*7=21; 3*8=24; 3*9=27; 3*10=30.
// let n = 7;
// for (a = 1; a <= 10; a++) {
//   console.log(`${n} x ${a} = ${n * a}`);
// }

// #15. 2 ийн n зэргийг ол. (Example: 5. Result:32)
// let n = 5;
// let sum = 1;
// for (a = 1; a <= n; a++) {
//   sum = sum * 2;
// }
// console.log(sum);

// #16. Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол. (Example: 234. Result:9)
// let sum = 0;
// for (a = 2; a <= 4; a++) {
//   sum += a;
// }
// console.log(sum);

// #17. 987654 дээрх тоо хэдэн оронтой тоо гэдгийг тоол. Result:6
// let n = "987654";
// for (a = 4; a <= 9; a++) {
//   strings = n.length;
// }
// console.log(strings);

// #18. Өгөгдёөн тооны квадратыг ол . Example: 5 . Result: 25
// let n = 5;
// let sum = 1;
// for (a = n; a <= n; a++) {
//   sum = n * n;

//   console.log(sum);
// }

// #19. Эхний N  тооны кубын нийлбэр. Example: 4 . Result:100
// let n = 4;
// let sum = 0;
// for (a = 1; a <= n; a++) {
//   sum += a ** 3;
// }
// console.log(sum);

// #20. 1–30 хүртэлх тоонууд дундаас 2 болон 3-т зэрэг хуваагддаг тоонуудыг хэвлэх
// for (a = 1; a <= 30; a++) {
//   if (a % 2 === 0 && a % 3 === 0) {
//     console.log(a);
//   }
// }

// #21. Хэрвээ тоо 3-т хуваагдвал “Fizz”, 5-т хуваагдвал “Buzz” гэж хэвлэх
// let n = 10;
// for (a = 1; a <= n; a++) {}
// if (n % 3 === 0) {
//   console.log("Fizz");
// }
// if (n % 5 === 0) {
//   console.log("Buzz");
// }

// #22. 1–100 хүртэлх 7-д хуваагддаггүй тоонуудыг хэвлэх.
// for (a = 1; a <= 100; a++) {
//   if (a % 7 !== 0) {
//     console.log(a);
//   }
// }

// #23. 1–50 хүртэлх тоонууд дундаас сондгой бөгөөд 5-ын үржвэр тоонуудыг олох.
// for (a = 1; a <= 50; a++) {
//   if (a % 2 !== 0) {
//     console.log(a * 5);
//   }
// }

// #24. 1–100 хүртэлх тоонуудын дундаас 50–60 хооронд байгаа тоонуудын нийлбэрийг гарга.
// let sum = 0;
// for (a = 1; a <= 100; a++) {
//   if (a >= 50 && a <= 60) {
//     sum += a;
//     console.log(sum);
//   }
// }

// #25. 1–20 хүртэлх тоонууд дундаас анхны тоонуудыг (prime numbers) ол. /багшаар заалгав/

// const num = 7;
// let isPrime = true;
// for (a = 2; a <= Math.sqrt(num); a++) {
//   if (num % a === 0) {
//     isPrime = false;
//     break;
//   }
// }
// console.log(isPrime);

// #26. 1–50 хүртэлх бүх сондгой тооны кубын нийлбэрийг ол.
// let sum = 0;
// for (a = 1; a <= 50; a++) {
//   if (a % 2 === 1) {
//     sum += a ** 3;
//     console.log(a);
//   }
// }
// console.log(sum);

// #27. 1–100 хүртэлх тоо бүрийг шалгаад 2-т болон 5-т зэрэг хуваагддаг бол тоог хэвлэ.
// for (a = 1; a <= 100; a++) {
//   if (a % 2 === 0 && a % 5 === 0) {
//     console.log(a);
//   }
// }
