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

// #1. 1-ээс 10 хүртэлх тооны квадратуудыг хэвлэ.
// let sum = 1;
// for (a = 1; a <= 10; a++) {
//   sum = a ** 2;
//   console.log(sum);
// }

// #2. Өөрийн нэрийг бичиж эсрэгээр нь хэвлэ. Жишээ нь: Сүх -> Хүс
const ner = "Suh";

// #3.  Өгөгдсөн жил зуны олимпийн жил мөн эсэхийг ол. 1896 онд эхэлсэн.
// let year = 2003;
// let olympic = false;
// for (a = 1896; a <= year; a += 4) {
//   if (a === year) {
//     olympic = true;
//   }
// }
// if (olympic) {
//   console.log(" зуны олимп болсон");
// } else {
//   console.log(" зуны олимп болоогүй");
// }

// #4. Өгөгдсөн жил өвлийн олимпийн жил мөн эсэхийг ол. 1924, 1994 онд эхэлсэн.
// let year = 2030;
// let olympic = false;
// for (a = 1924; a <= 1992; a += 4) {
//   if (a === year) olympic = true;
// }

// for (a = 1994; a <= year; a += 4) if (a === year) olympic = true;
// if (olympic) {
//   console.log(" өвлийн олимп болсон");
// } else {
//   console.log(" өвлийн олимп болоогүй");
// }

// #5. Хэрэглэгчээс сарын дугаар (1-12) аваад, улирал хэвлэнэ:
// let month = 10;
// for (a = 1; a <= 12; a++) {
//   if (a === month)
//     if (a >= 3 && a <= 5) {
//       console.log(month + " сар нь хаврын улирал");
//     } else if (a >= 6 && a <= 8) {
//       console.log(month + " сар нь зуны улирал");
//     } else if (a >= 9 && a <= 11) {
//       console.log(month + " сар нь намрын улирал");
//     } else console.log(month + " сар нь өвлийн улирал");
// }

// #6. Хэрэглэгчээс шатахууны төрлийг (92, 95, D) болон литр авах бөгөөд үнийг тооцно:
// let turul = "D";
// let litr = 10;
// if (turul === "92") {
//   litr = litr * 2500;
//   console.log(turul + ": " + litr + "₮" + " төгрөг");
// } else if (turul === "95") {
//   litr = litr * 3000;
//   console.log(turul + ": " + litr + "₮" + " төгрөг");
// } else if (turul === "D") {
//   litr = litr * 2200;
//   console.log(turul + ": " + litr + "₮" + " төгрөг");
// } else {
//   console.log(" тийм бинзен байхгүй");
// }

// #7. yearOfBirth гэсэн хувьсагчид гараас төрсөн оныг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
// let birth = 2007;
// let year = 2025;
// let old = year - birth;
// if (old > 0 && old <= 1) {
//   console.log(old + " настай" + " Infant");
// } else if (old > 1 && old <= 3) {
//   console.log(old + " настай" + " Toddler");
// } else if (old > 3 && old <= 5) {
//   console.log(old + " настай" + " Preschool");
// } else if (old > 5 && old <= 12) {
//   console.log(old + " настай" + " Gradeschooler");
// } else if (old > 12 && old <= 18) {
//   console.log(old + " настай" + " Teen");
// } else if (old > 18 && old <= 21) {
//   console.log(old + " настай" + " Yound adult");
// } else if (old > 21) {
//   console.log(old + " настай" + " Adult");
// } else {
//   console.log("нас тооцоолох боломжгүй");
// }

//  #1. Armstrong тоо мөн үгүйг шалгах. 153 -> 1**3 + 5**3 + 3**3 = 153
// let num = 370;
// let one = (num % 10) ** 3;
// let two = Math.floor((num % 100) / 10) ** 3;
// let three = Math.floor(num / 100) ** 3;
// let total = three + two + one;
// if (num === total) {
//   console.log("true");
// } else {
//   console.log("false");
// }

//  #2. N хүртэлх бүх тоог * дүрсээр график үүсгэх
// *
// **
// ***
// ****
// *****
// let n = 5;
// let od = "";
// for (a = 1; a <= n; a++) {
//   od = od + "*";
//   console.log(od);
// }

// #3. 1-ээс N хүртэл бүх тоог хэвлэх, тэгш, сондгой ялгах, нийлбэрийг тооцоолох
// 1-ээс N хүртэлх бүх тоог хэвлэх, тэгш болон сондгойг ялгаад, эцэст нь тэгшийн нийлбэр, сондгойгийн нийлбэр-ийг хэвлэх.
// let n = 10;
// let tegsh = 0;
// let sondgoi = 0;
// for (a = 1; a <= n; a++) {
//   //   console.log(a);
//   if (a % 2 === 0) {
//     // console.log(a);
//     tegsh = tegsh + a;
//   } else {
//     // console.log(a);
//     sondgoi = sondgoi + a;
//   }
// }
// console.log(tegsh);
// console.log(sondgoi);
